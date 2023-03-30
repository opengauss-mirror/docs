# CLOSE<a name="EN-US_TOPIC_0289899821"></a>

## Function<a name="en-us_topic_0283137397_en-us_topic_0237122091_en-us_topic_0059779164_sa18f3afba3784d76b0052fa2fa489b8c"></a>

**CLOSE**  frees the resources associated with an open cursor.

## Precautions<a name="en-us_topic_0283137397_en-us_topic_0237122091_en-us_topic_0059779164_seebfc5d278d44f7382b1d230976ae9ea"></a>

-   After a cursor is closed, no subsequent operations are allowed on it.
-   A cursor should be closed when it is no longer needed.
-   Every non-holdable open cursor is implicitly closed when a transaction is terminated by  **COMMIT**  or  **ROLLBACK**.
-   A holdable cursor is implicitly closed if the transaction that created it aborts by  **ROLLBACK**.
-   If the cursor creation transaction is successfully committed, the holdable cursor remains open until an explicit  **CLOSE**  operation is executed, or the client disconnects.
-   openGauss does not have an explicit  **OPEN**  cursor statement. A cursor is considered open when it is declared. You can view all available cursors by querying the  **pg\_cursors**  system view.

## Syntax<a name="en-us_topic_0283137397_en-us_topic_0237122091_en-us_topic_0059779164_s8ba4e8a4cce54146aea763d5569214e7"></a>

```
CLOSE { cursor_name | ALL } ;
```

## Parameter Description<a name="en-us_topic_0283137397_en-us_topic_0237122091_en-us_topic_0059779164_s9a79c82c9d044057bd0e41c544e1efcd"></a>

-   **cursor\_name**

    Specifies the name of a cursor to be closed.

-   **ALL**

    Closes all open cursors.


## Examples<a name="en-us_topic_0283137397_en-us_topic_0237122091_en-us_topic_0059779164_sc77056d6ff5e4461b6f03b2587665cf0"></a>

See  [Examples](fetch.md#en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_s1ee72832a27547e4949061a010e24578)  in  **FETCH**.

## Helpful Links<a name="en-us_topic_0283137397_en-us_topic_0237122091_en-us_topic_0059779164_sbd6c1c8ef3144346919144e8b416822f"></a>

[FETCH](fetch.md)  and  [MOVE](move.md)

