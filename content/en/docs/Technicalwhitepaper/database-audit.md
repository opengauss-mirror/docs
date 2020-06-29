# Database Audit<a name="EN-US_TOPIC_0252569396"></a>

Audit logs record user operations performed on database startup and stopping, connection, and DDL, DML, and DCL operations. The audit log mechanism enhances the database capability of tracing illegal operations and collecting evidence.

You can set parameters to specify the statements or operations for which audit logs are recorded.

Audit logs record the event time, type, execution result, username, database, connection information, database object, database instance name, port number, and details. You can query audit logs by start time and end time and filter audit logs by recorded field.

Database security administrators can use the audit logs to reproduce a series of events that cause faults in the database and identify unauthorized users, unauthorized operations, and the time when these operations are performed.

