# Lock Operations<a name="EN-US_TOPIC_0245374630"></a>

openGauss provides multiple lock modes to control concurrent accesses to table data. These modes are used when Multi-Version Concurrency Control \(MVCC\) cannot give expected behaviors. Alike, most openGauss commands automatically apply appropriate locks to ensure that called tables are not deleted or modified in an incompatible manner during command execution. For example, when concurrent operations exist,  **ALTER TABLE**  cannot be executed on the same table.

