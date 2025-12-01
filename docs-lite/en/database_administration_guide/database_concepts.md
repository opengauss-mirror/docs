# Concepts<a name="EN-US_TOPIC_0289899853"></a>

## Database<a name="en-us_topic_0283137146_en-us_topic_0237120248_en-us_topic_0059779238_s81123a0249f349a9af2c50cc1641ff54"></a>

Databases manage various data objects and are isolated from each other. While creating a database, you can specify a tablespace. If you do not specify it, the object will be saved to the  **PG\_DEFAULT**  tablespace by default. Objects managed by a database can be distributed to multiple tablespaces.

## Tablespace<a name="en-us_topic_0283137146_en-us_topic_0237120248_en-us_topic_0059779238_scc21ccb22d48437e9a0811ee7ba1167c"></a>

In openGauss, a tablespace is a directory storing physical files of the databases the tablespace contains. Multiple tablespaces can coexist. Files are physically isolated using tablespaces and managed by a file system.

## Schema<a name="en-us_topic_0283137146_en-us_topic_0237120248_en-us_topic_0059779238_s423bbf6397084f98af46d8e06f4fac95"></a>

openGauss schemas logically separate databases. All database objects are created under certain schemas. In openGauss, schemas and users are loosely bound. When you create a user, a schema with the same name as the user will be created automatically. You can also create a schema or specify another schema.

## User and Role<a name="en-us_topic_0283137146_en-us_topic_0237120248_en-us_topic_0059779238_sc39162e544dc4f6887963b42c4f86dcb"></a>

openGauss uses users and roles to control the access to databases. A role can be a database user or a group of database users, depending on role settings. In openGauss, the difference between roles and users is that a role does not have the  **LOGIN**  permission by default. In openGauss, one user can have only one role, but you can put a user's role under a parent role to grant multiple permissions to the user.

## Transaction<a name="en-us_topic_0283137146_en-us_topic_0237120248_en-us_topic_0059779238_sac2ce3a4af3c4bd9bf75f61d658f9402"></a>

In openGauss, transactions are managed by multi-version concurrency control \(MVCC\) and two-phase locking \(2PL\). It enables smooth data reads and writes. openGauss MVCC saves historical version data together with the current tuple version. openGauss uses a VACUUM thread instead of rollback segments to periodically delete historical version data. Unless in performance optimization, you do not need to pay attention to the  **VACUUM**  process. In addition, openGauss automatically commits transactions.

