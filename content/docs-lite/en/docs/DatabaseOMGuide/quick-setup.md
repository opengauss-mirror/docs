# Quick Setup<a name="EN-US_TOPIC_0289900926"></a>

Set the following configuration items in the **postgresql.conf** file.
```
wal_level = logical
```
For a basic setup, retain the default values for the other necessary configuration items.

You need to adjust the **pg\_hba.conf** file to allow replication (the value depends on the actual network configuration and the user used for connection).
```
host     all     repuser     0.0.0.0/0     sha256
```
Run the following command in the publisher database. (For details about the command for creating a publication, see [CREATE PUBLICATION](../SQLReference/create-publication.md).)
```
CREATE PUBLICATION mypub FOR TABLE users, departments;
```
Run the following command in the subscriber database: (For details about the command for creating a subscription, see [CREATE SUBSCRIPTION](../SQLReference/create-subscription.md).)
```
CREATE SUBSCRIPTION mysub CONNECTION 'dbname=foo host=bar user=repuser' PUBLICATION mypub;
```
The preceding statement starts the replication process, synchronizes the initial data of the **users** and **departments** tables, and then starts to replicate incremental changes to those tables.

You can modify the publication later, for example, add or delete the publication table. (For details about the command for modifying a publication, see [ALTER PUBLICATION](../SQLReference/alter-publication.md).)
```
ALTER PUBLICATION mypub ADD TABLE new_tbl;
```
After adding a publication table, you need to update the table in the subscriber database. (For details about the command for modifying a subscription, see [ALTER SUBSCRIPTION](../SQLReference/alter-subscription.md).)
```
ALTER SUBSCRIPTION mysub REFRESH PUBLICATION;
```
Delete the publication from the publisher database. (For details about the command for deleting a publication, see [DROP PUBLICATION](../SQLReference/drop-publication.md).)
```
DROP PUBLICATION mypub;
```
Delete the subscription from the subscriber database. For details about the command for deleting a subscription, see [DROP SUBSCRIPTION](../SQLReference/drop-subscription.md).)
```
DROP SUBSCRIPTION mysub;
```
