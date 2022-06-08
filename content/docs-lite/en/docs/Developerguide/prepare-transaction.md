# PREPARE TRANSACTION<a name="EN-US_TOPIC_0289900175"></a>

## Function<a name="en-us_topic_0283137205_en-us_topic_0237122172_en-us_topic_0059779173_s84c1f6c6e66743a3b5e71a25e070e50f"></a>

**PREPARE TRANSACTION**  prepares the current transaction for two-phase commit.

After this statement, the transaction is no longer associated with the current session; instead, its state is fully stored on disk, and there is a high probability that it can be committed successfully, even if a database crash occurs before the commit is requested.

Once prepared, a transaction can later be committed or rolled back with  [COMMIT PREPARED](commit-prepared.md)  or  [ROLLBACK PREPARED](rollback-prepared.md), respectively. Those statements can be issued from any session, not only the one that executed the original transaction. 

From the point of view of the issuing session,  **PREPARE TRANSACTION**  is not unlike a  **ROLLBACK**  statement: after executing it, there is no active current transaction, and the effects of the prepared transaction are no longer visible. \(The effects will become visible again if the transaction is committed.\)

If the  **PREPARE TRANSACTION**  statement fails for any reason, it becomes a  **ROLLBACK**  and the current transaction is canceled.

## Precautions<a name="en-us_topic_0283137205_en-us_topic_0237122172_en-us_topic_0059779173_sa5991e597322481d9b5cf468c92b7af7"></a>

-   The transaction function is maintained automatically by the database, and should be not visible to users.
-   When running the  **PREPARE TRANSACTION**  statement, increase the value of  **max\_prepared\_transactions**  in configuration file  **postgresql.conf**. You are advised to set  **max\_prepared\_transactions**  to a value not less than that of  **max\_connections**  so that one pending prepared transaction is available for each session.

## Syntax<a name="en-us_topic_0283137205_en-us_topic_0237122172_en-us_topic_0059779173_s53fd0bedc6174ab7a4c21729b10b8889"></a>

```
PREPARE TRANSACTION transaction_id;
```

## Parameter Description<a name="en-us_topic_0283137205_en-us_topic_0237122172_en-us_topic_0059779173_safa475d1f6f848039db0d794c7f5aa5b"></a>

**transaction\_id**

Specifies an arbitrary identifier that later identifies this transaction for  **COMMIT PREPARED**  or  **ROLLBACK PREPARED**. The identifier must be different from those for current prepared transactions.

Value range: The identifier must be written as a string literal, and must be less than 200 bytes long.

## Helpful Links<a name="en-us_topic_0283137205_en-us_topic_0237122172_en-us_topic_0059779173_s2562d8e8d89a4cd981f08e57f14bb219"></a>

[COMMIT PREPARED](commit-prepared.md)  and  [ROLLBACK PREPARED](rollback-prepared.md)

