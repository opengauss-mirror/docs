# COMMIT PREPARED<a name="EN-US_TOPIC_0289900574"></a>

## Function<a name="en-us_topic_0283137183_en-us_topic_0237122095_en-us_topic_0059777686_s06b2916a6c67438087f9f84a0159252a"></a>

**COMMIT PREPARED**  commits a prepared two-phase transaction.

## Precautions<a name="en-us_topic_0283137183_en-us_topic_0237122095_en-us_topic_0059777686_s482c910917bb49bc8102755589ad261a"></a>

-   The function is only available in maintenance mode \(when the GUC parameter  **xc\_maintenance\_mode**  is  **on**\). Exercise caution when enabling the mode. It is used by maintenance engineers for troubleshooting. Common users should not use the mode.
-   Only the transaction creators or system administrators can run the  **COMMIT PREPARED**  command. The creation and commit operations must be in different sessions.
-   The transaction function is maintained automatically by the database, and should be not visible to users.

## Syntax<a name="en-us_topic_0283137183_en-us_topic_0237122095_en-us_topic_0059777686_s0d0ca300175c4442a111a05cf2f7f5c4"></a>

```
COMMIT PREPARED transaction_id ;
COMMIT PREPARED transaction_id WITH CSN;
```

## Parameter Description<a name="en-us_topic_0283137183_en-us_topic_0237122095_en-us_topic_0059777686_sf5a6e24d12744394a76bb31e0fe9f077"></a>

-   **transaction\_id**

    Specifies the identifier of the transaction to be committed. The identifier must be different from those for current prepared transactions.


-   **CSN \(commit sequence number\)**

    Specifies the sequence number of the transaction to be committed. It is a 64-bit, incremental, unsigned number.


## Examples<a name="en-us_topic_0283137183_en-us_topic_0237122095_section2201134011213"></a>

```
COMMIT PREPARED commits a transaction whose identifier is trans_test.
openGauss=# COMMIT PREPARED 'trans_test';
```

## Helpful Links<a name="en-us_topic_0283137183_en-us_topic_0237122095_en-us_topic_0059777686_s7c42ca786fad42b0badcb6f63e895aff"></a>

[PREPARE TRANSACTION](prepare-transaction.md)  and  [ROLLBACK PREPARED](rollback-prepared.md)

