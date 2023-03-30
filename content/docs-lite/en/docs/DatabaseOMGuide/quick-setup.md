# Quick Setup<a name="EN-US_TOPIC_0289900926"></a>

Set the following configuration items in the **postgresql.conf** file:
```
wal_level = logical
```
For a basic setup, retain the default values for the other necessary configuration items.

You need to adjust the **pg_hba.conf** file to allow replication (the value depends on the actual network configuration and the user used for connection).
```
host     all     repuser     0.0.0.0/0     sha256
```
In the publisher database:
```
CREATE PUBLICATION mypub FOR TABLE users, departments;
```
In the subscriber database:
```
CREATE SUBSCRIPTION mysub CONNECTION 'dbname=foo host=bar user=repuser' PUBLICATION mypub;
```
The above statements start the replication process, replicating incremental changes to those tables.
