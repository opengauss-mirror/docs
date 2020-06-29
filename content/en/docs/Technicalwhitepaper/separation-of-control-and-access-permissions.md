# Separation of Control and Access Permissions<a name="EN-US_TOPIC_0252569393"></a>

For the system administrator, the control and access permissions on table objects are separated to improve data security of common users and restrict the object access permissions of administrators.

This feature applies to the following scenarios: An enterprise has multiple business departments using different database users to perform service operations. Database maintenance departments at the same level use the database administrator to perform O&M operations. The business departments require that administrators can only perform control operations \(DROP, ALTER, and TRUNCATE\) on data of each department and cannot perform access operations \(INSERT, DELETE, UPDATE, SELECT, and COPY\) without authorization. That is, the control permissions of database administrators for tables need to be isolated from their access permissions to improve the data security of common users.

The system administrators can specify the  **INDEPENDENT**  attribute when creating a user, indicating that the user is a private user. Database administrators \(including initial users and other administrators\) can control \(DROP, ALTER, and TRUNCATE\) objects of private users but cannot access \(INSERT, DELETE, UPDATE, SELECT, COPY, GRANT, REVOKE, and ALTER OWNER\) the objects without authorization.

