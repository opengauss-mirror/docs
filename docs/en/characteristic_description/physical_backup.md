# Physical Backup<a name="EN-US_TOPIC_0000001105235302"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section35020791"></a>

Data in the entire database is backed up to a specified storage medium in an internal format.

## Benefits<a name="section46751668"></a>

Through physical backup, you can achieve the following purposes:

-   Back up data of the entire database to a reliable storage medium, improving system reliability.
-   Improve backup and restoration performance using an internal data format.
-   Archive cold data.

The typical physical backup policy and application scenario are as follows:

-   On Monday, perform a full backup of the database.
-   On Tuesday, perform an incremental backup based on the full backup on Monday.
-   On Wednesday, perform an incremental backup based on the incremental backup on Tuesday.
-   ...
-   On Sunday, perform an incremental backup based on the incremental backup on Saturday.

The preceding backup operations are executed every week.

## Description<a name="section18111828"></a>

openGauss provides the physical backup capability to back up data of the entire database to local disk files, OBS objects, NBU objects, or EISOO objects in the internal database format, and restore data of the entire database in a homogeneous database. In addition to the preceding functions, it also provides advanced functions such as compression, flow control, and resumable backup.

Physical backup is classified into full backup and incremental backup. The difference is as follows: Full backup includes the full data of the database at the backup time point. The time required for full backup is long \(in direct proportion to the total data volume of the database\), and a complete database can be restored. An incremental backup involves only incremental data modified after a specified time point. It takes a short period of time \(in direct proportion to the incremental data volume and irrelevant to the total data volume\). However, a complete database can be restored only after the incremental backup and full backup are performed.

## Enhancements<a name="section28788730"></a>

Supports full backup and incremental backup simultaneously.

## Constraints<a name="section06531946143616"></a>

For details about the constraints of physical backup, see Backup and Restoration \> Physical Backup and Restoration in  _Administrator Guide_.

## Dependencies<a name="section57771982"></a>

None.

