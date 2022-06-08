# Security<a name="EN-US_TOPIC_0000001216402106"></a>

The role used for the replication connection must have the  **REPLICATION**  attribute \(or be a user with the  **SYSADMIN**  permission\). If the role lacks  **SUPERUSER**  and  **BYPASSRLS**, the publisher's row security policies can be executed. The access permission of the role must be configured in the  **pg\_hba.conf**  file and the role must have the  **LOGIN**  attribute.

To create a publication, the user must have the  **CREATE**  permission on the database.

To add tables to a publication, the user must have ownership of the table. To create a publication that automatically publishes all tables, the user must be a user with  **SYSADMIN**  permission.

To create a subscription, the user must be a user with the  **SYSADMIN**  permission.

The subscription apply process will run in the local database with the privileges of a user with the  **SYSADMIN**  permission.

Privileges are only checked once at the start of the replication connection. They are not re-checked when each change record is read from the publisher and when each change is applied.

