# ROLLBACK PREPARED<a name="EN-US_TOPIC_0289900446"></a>

## Function<a name="en-us_topic_0283136817_en-us_topic_0237122181_en-us_topic_0059779108_s4ddd2b1606b742109b4066ee1dee112e"></a>

**ROLLBACK PREPARED**  cancels a transaction ready for two-phase committing.

## Precautions<a name="en-us_topic_0283136817_en-us_topic_0237122181_en-us_topic_0059779108_sde92c2efb2ed48d4bbaf0f41b971eaaf"></a>

-   The function is only available in maintenance mode \(when GUC parameter  **xc\_maintenance\_mode**  is  **on**\). Exercise caution when enabling the mode. It is used by maintenance engineers for troubleshooting. Common users should not use the mode.
-   Only the user that initiates a transaction or the system administrator can roll back the transaction.
-   The transaction function is maintained automatically by the database, and should be not visible to users.

## Syntax<a name="en-us_topic_0283136817_en-us_topic_0237122181_en-us_topic_0059779108_s8b401cf759b14cafac859d804d24414b"></a>

```
ROLLBACK PREPARED transaction_id ;
```

## Parameter Description<a name="en-us_topic_0283136817_en-us_topic_0237122181_en-us_topic_0059779108_scb5b67e1949c4c02ab7624fb4d845685"></a>

**transaction\_id**

Specifies the identifier of the transaction to be committed. The identifier must be different from those for current prepared transactions.

## Helpful Links<a name="en-us_topic_0283136817_en-us_topic_0237122181_en-us_topic_0059779108_s8478ceeac5ca4509817f9fab4c7a138a"></a>

[COMMIT PREPARED](commit-prepared.md)  and  [PREPARE TRANSACTION](prepare-transaction.md)

