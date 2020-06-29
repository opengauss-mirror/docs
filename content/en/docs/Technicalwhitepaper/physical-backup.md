# Physical Backup<a name="EN-US_CONCEPT_0252569380"></a>

openGauss provides the physical backup capability to back up data of an entire DB instance to local disk files in the internal format of the database, and restore the data of the entire DB instance in a homogeneous database.

Physical backup is classified into full backup and incremental backup. The difference is as follows: Full backup includes the full data of the database at the backup time point. The time required for full backup is long \(in direct proportion to the total data volume of the database\), and a complete database can be restored. An incremental backup involves only incremental data modified after a specified time point. It takes a short period of time \(in direct proportion to the incremental data volume and irrelevant to the total data volume\). However, a complete database can be restored only after the incremental backup and full backup are performed. Currently, openGauss supports only full backup.

