# START TRANSACTION<a name="EN-US_TOPIC_0289900916"></a>

## Function<a name="en-us_topic_0283137090_en-us_topic_0237122192_en-us_topic_0059777519_s7c3a854297a0489db05671ba82a741a8"></a>

**START TRANSACTION**  starts a transaction. If the isolation level or read/write mode is specified, a new transaction will have those characteristics. You can also specify them using  [SET TRANSACTION](set-transaction.md).

## Precautions<a name="en-us_topic_0283137090_en-us_topic_0237122192_en-us_topic_0059777519_s979f52c7c24646079e674d30c683c436"></a>

None

## Syntax<a name="en-us_topic_0283137090_en-us_topic_0237122192_en-us_topic_0059777519_s6726d34599a04c99b2d48c6da3e542c5"></a>

Format 1: START TRANSACTION

```
START TRANSACTION
  [ 
    { 
       ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
       | { READ WRITE | READ ONLY }
     } [, ...] 
  ];
```

Format 2: BEGIN

```
BEGIN [ WORK | TRANSACTION ]
  [ 
    { 
       ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
       | { READ WRITE | READ ONLY }
      } [, ...] 
  ];
```

## Parameter Description<a name="en-us_topic_0283137090_en-us_topic_0237122192_en-us_topic_0059777519_s664d0d0976d247e1a670c733cb6d6304"></a>

-   **WORK | TRANSACTION**

    Specifies the optional keyword in BEGIN format without functions.

-   **ISOLATION LEVEL**

    Specifies the transaction isolation level that determines the data that a transaction can view if other concurrent transactions exist.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The isolation level of a transaction cannot be reset after the first clause \(**SELECT**,  **INSERT**,  **DELETE**,  **UPDATE**,  **FETCH**,  **COPY**\) for modifying data is executed in the transaction.

    Value range:

    -   **READ COMMITTED**: Only submitted data is read. It is the default value.
    -   **REPEATABLE READ**: Only the data committed before transaction start is read. Uncommitted data or data committed in other concurrent transactions cannot be read.
    -   **SERIALIZABLE**: Currently, this isolation level is not supported in openGauss. It is equivalent to  **REPEATABLE READ**.

-   **READ WRITE | READ ONLY**

    Specifies the transaction access mode \(read/write or read only\).


## Examples<a name="en-us_topic_0283137090_en-us_topic_0237122192_en-us_topic_0059777519_s8c971e0651d14f0a96a3e8c8c3e4c4de"></a>

```
-- Start a transaction in default mode.
openGauss=# START TRANSACTION;
openGauss=# SELECT * FROM tpcds.reason;
openGauss=# END;

-- Start a transaction in default mode.
openGauss=# BEGIN;
openGauss=# SELECT * FROM tpcds.reason;
openGauss=# END;

-- Start a transaction with the isolation level being READ COMMITTED and the access mode being READ WRITE:
openGauss=# START TRANSACTION ISOLATION LEVEL READ COMMITTED READ WRITE;
openGauss=# SELECT * FROM tpcds.reason;
openGauss=# COMMIT;
```

## Helpful Links<a name="en-us_topic_0283137090_en-us_topic_0237122192_en-us_topic_0059777519_s144c0965b0ba447e9d3a73dd5dac1aad"></a>

[COMMIT | END](commit-end.md),  [ROLLBACK](rollback.md), and  [SET TRANSACTION](set-transaction.md)

