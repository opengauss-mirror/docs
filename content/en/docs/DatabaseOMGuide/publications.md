# Publications<a name="EN-US_TOPIC_0000001261761883"></a>

A publication can be defined on any primary physical replication server. The node where a publication is defined is called the publisher. A publication is a set of changes generated from a table or a group of tables. It can also be described as a change set or replication set. Each publication exists in only one database.

Publications are different from schemas and do not affect how tables are accessed. Each table can be added to multiple publications if needed. Currently, publications can contain only tables. Objects must be explicitly added to a publication, unless the publication is created by running  **ALL TABLES**.

Publications can choose to limit the changes they produce to any combination of  **INSERT**,  **UPDATE**, and  **DELETE**, which is similar to how triggers are fired by particular events. By default, all types of operations are replicated.

A published table must be configured with a "replication identifier" in order to be able to replicate UPDATE and DELETE operations, so that appropriate rows to be updated or deleted can be identified on the subscriber side. By default, the replication identifier is the primary key \(if any\). You can also set another unique index \(with certain additional requirements\) to be the replication identifier. If the table does not have any suitable key, you can set the replication identifier to "full", which indicates that the entire row becomes the key. However, this is very inefficient and should be used only when there are no other solutions. If a replication identifier other than "full" is set on the publisher side, a replication identifier comprising the same or fewer columns must also be set on the subscriber side. For details about how to set a replication identifier, see  **REPLICA IDENTITY**  in  [ALTER TABLE](../SQLReference/alter-table.md). If a table without a replication identifier is added to a publication that replicates UPDATE or DELETE operations, subsequent UPDATE or DELETE operations on the subscriber side will cause an error. INSERT operations can proceed regardless of any replication identifier.

Each publication can have multiple subscribers.

A publication is created by running the  **CREATE PUBLICATION**  command and can be altered or dropped by running the corresponding commands.

Tables can be added or removed dynamically by running the  **ALTER PUBLICATION**  command. ADD TABLE and DROP TABLE operations are transactional. Therefore, once the transaction is committed, table replication will start or stop using a proper snapshot.

