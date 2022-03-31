# Controlling Transactions<a name="EN-US_TOPIC_0289899986"></a>

A transaction is a user-defined sequence of database operations, which form an integral unit of work.

## Starting a Transaction<a name="en-us_topic_0283137498_en-us_topic_0237122048_en-us_topic_0059777755_s3ab706d683324555abdbac06900a4266"></a>

openGauss starts a transaction using  **START TRANSACTION**  and  **BEGIN**. For details, see  [START TRANSACTION](start-transaction.md)  and  [BEGIN](begin.md).

## Setting a Transaction<a name="en-us_topic_0283137498_en-us_topic_0237122048_en-us_topic_0059777755_safc73bb82c674a69a44e59eca4831fb1"></a>

openGauss sets a transaction using  **SET TRANSACTION**  or  **SET LOCAL TRANSACTION**. For details, see  [SET TRANSACTION](set-transaction.md).

## Committing a Transaction<a name="en-us_topic_0283137498_en-us_topic_0237122048_en-us_topic_0059777755_sf5fd4452e6f74585b579cf647848bd85"></a>

openGauss commits all operations of a transaction using  **COMMIT**  or  **END**. For details, see  [COMMIT | END](commit-end.md).

## Rolling Back a Transaction<a name="en-us_topic_0283137498_en-us_topic_0237122048_en-us_topic_0059777755_s052521b534034da28939ba0395454da2"></a>

If a fault occurs during a transaction and the transaction cannot proceed, the system performs rollback to cancel all the completed database operations related to the transaction. See  [ROLLBACK](rollback.md).

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If an execution request \(not in a transaction block\) received in the database contains multiple statements, the request is packed into a transaction. If one of the statements fails, the entire request will be rolled back.

