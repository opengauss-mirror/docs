# SET TRANSACTION<a name="EN-US_TOPIC_0289900810"></a>

## Function<a name="en-us_topic_0283137515_en-us_topic_0237122190_en-us_topic_0059778135_se7890b9b6c9749168d76cd4ce38ee49f"></a>

**SET TRANSACTION**  sets characteristics of a transaction. Available transaction characteristics include the transaction isolation level and transaction access mode \(read/write or read only\). You can set the current transaction characteristics using  **LOCAL**  or the default transaction characteristics of a session using  **SESSION**.

## Precautions<a name="en-us_topic_0283137515_en-us_topic_0237122190_en-us_topic_0059778135_s91c8bf3e55a0490299ef9c0cd59f44f6"></a>

The current transaction characteristics must be set in a transaction, that is,  **START TRANSACTION**  or  **BEGIN**  must be executed before  **SET TRANSACTION**  is executed. Otherwise, the setting does not take effect.

## Syntax<a name="en-us_topic_0283137515_en-us_topic_0237122190_en-us_topic_0059778135_sce3e49e1f5894684861d1df6677d12c8"></a>

Set the isolation level and access mode of the transaction.

```
{ SET [ LOCAL ] TRANSACTION|SET SESSION CHARACTERISTICS AS TRANSACTION }
  { ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
  | { READ WRITE | READ ONLY } } [, ...]
```

## Parameter Description<a name="en-us_topic_0283137515_en-us_topic_0237122190_en-us_topic_0059778135_sedb5d46e1cef47ad953116db260be4ad"></a>

-   **LOCAL**

    Specifies that the specified statement takes effect only for the current transaction.

-   **SESSION**

    Specifies that the specified parameters take effect for the current session.

    Value range: a string. It must comply with the naming convention.

-   **ISOLATION\_LEVEL**

    Specifies the transaction isolation level that determines the data that a transaction can view if other concurrent transactions exist.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The isolation level cannot be changed after data is modified using  **SELECT**,  **INSERT**,  **DELETE**,  **UPDATE**,  **FETCH**, or  **COPY**  in the current transaction.

    Value range:

    -   **READ COMMITTED**: Only submitted data is read. It is the default value.
    -   **REPEATABLE READ**: Only the data committed before transaction start is read. Uncommitted data or data committed in other concurrent transactions cannot be read.
    -   **SERIALIZABLE**: Currently, this isolation level is not supported in openGauss. It is equivalent to  **REPEATABLE READ**.

-   **READ WRITE | READ ONLY**

    Specifies the transaction access mode \(read/write or read only\).


## Examples<a name="en-us_topic_0283137515_en-us_topic_0237122190_en-us_topic_0059778135_sf3622c31002245c482e236cade222456"></a>

```
-- Start a transaction and set its isolation level to READ COMMITTED and access mode to READ ONLY.
openGauss=# START TRANSACTION;
openGauss=# SET LOCAL TRANSACTION ISOLATION LEVEL READ COMMITTED READ ONLY;
openGauss=# COMMIT;
```

