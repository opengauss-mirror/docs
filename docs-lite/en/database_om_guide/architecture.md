# Architecture<a name="EN-US_TOPIC_0289900926"></a>

Changes on publishers are sent to subscribers in real time as they occur. The subscriber applies data in the order in which it is committed on the publisher to ensure transactional consistency of publications in any single subscription.

Logical replication is built with an architecture similar to physical streaming replication. It is implemented by the walsender and apply processes. The walsender process starts logical decoding of the WAL and loads the standard logical decoding plug-in \(pgoutput\). The plug-in transforms the changes read from the WAL into a logical replication protocol and filters the data according to the publication specifications. The data is then continuously transferred to the apply worker using the streaming replication protocol, and the apply worker maps the data to the local table and applies the changes they receive in the correct transactional order.

The apply process in the subscriber database always runs with **session\_replication\_role** set to **replica**, which produces the usual effects on triggers and constraints.

The logical replication apply process currently fires only row triggers, not statement triggers. However, the initial table synchronization is implemented through methods similar to **COPY** command execution, and therefore, row and statement triggers for INSERT are fired.
