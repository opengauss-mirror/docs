# Conflicts<a name="EN-US_TOPIC_0000001261441947"></a>

Logical replication behaves similarly to common DML operations. Even if the data is modified locally on the subscriber node, logical replication updates the data based on the received changes. If the incoming data violates any constraints, the replication will stop. This situation is called a conflict. When UPDATE or DELETE operations are replicated, the missing data will not cause conflicts and such operations will be simply skipped.

A conflict will cause errors and stop the replication, which must be resolved manually by the user. Details about the conflict can be found in the subscriber's server log.

The conflict can be resolved either by changing the data on the subscriber \(so that the data does not conflict with incoming data\) or by skipping the transaction that conflicts with the existing data. The transaction can be skipped by calling the  **pg\_replication\_origin\_advance\(\)**  function with  **node\_name**  corresponding to the subscription name, and an Xlog LSN. The current position of the replication source can be seen in the  **pg\_replication\_origin\_status system**  view.

