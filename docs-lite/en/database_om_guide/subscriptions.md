# Subscriptions<a name="EN-US_TOPIC_0289900926"></a>

A subscription is the downstream side of logical replication. The node where a subscription is defined is called the subscriber. A subscription defines the connection to another database and the set of publications (one or more) that it wants to subscribe to.

The subscriber database behaves in the same way as any other openGauss instance and can be used as a publisher for other databases by defining its own publications.

A subscriber node can have multiple subscriptions if needed. You can define multiple subscriptions between a pair of publishers and subscribers, in which case you need to ensure that the published objects do not overlap.

Each subscription will receive changes through a replication slot. Currently, initial data in pre-existing tables cannot be synchronized.

If the current user is a user with the SYSADMIN permission, subscriptions are dumped by **gs\_dump**. Otherwise, the subscriptions are skipped and a warning is written because users without the SYSADMIN permission cannot read all subscription information from the **pg\_subscription** directory.

You can use CREATE SUBSCRIPTION to add a subscription, ALTER SUBSCRIPTION to alter a subscription, and DROP SUBSCRIPTION to drop a subscription.

When a subscription is dropped and recreated, the synchronized information is lost. This means that the data must be resynchronized.

The schema definitions are not replicated, and the published tables must exist on the subscriber. Only regular tables can be replicated. For example, a view cannot be replicated.

The tables are matched between the publisher and the subscriber using fully qualified table names. Replication to differently-named tables on the subscriber is not supported.

Columns of a table are also matched by name. The order of columns in the subscribed table does not need to be the same as that in the published table. The data types of the columns do not need to be the same, as long as the text representation of the data can be converted to the target type. For example, you can replicate from a column of the integer type to a column of the bigint type. The target table can also have additional columns that do not exist in the published table. The additional columns will be filled with the default values specified in the definition of the target table.
