# COMMIT | END<a name="EN-US_TOPIC_0289900020"></a>

## Function<a name="en-us_topic_0283137519_en-us_topic_0237122094_en-us_topic_0059779032_sbacb814400404584828c86483f577b12"></a>

**COMMIT**  or  **END**  commits all operations of a transaction.

## Precautions<a name="en-us_topic_0283137519_en-us_topic_0237122094_en-us_topic_0059779032_s4f818d02dea3426a8d5d49aa87700b0c"></a>

Only the creator of a transaction or a system administrator can run the  **COMMIT**  command. The creation and commit operations only be in the same sessions.

## Syntax<a name="en-us_topic_0283137519_en-us_topic_0237122094_en-us_topic_0059779032_sdd27e9322013412eab2a6cb5e598b150"></a>

```
{ COMMIT | END } [ WORK | TRANSACTION ] ;
```

## Parameter Description<a name="en-us_topic_0283137519_en-us_topic_0237122094_en-us_topic_0059779032_sd6836b044d0a45f3861bf79721a4292b"></a>

-   **COMMIT | END**

    Commits the current transaction and makes all changes made by the transaction become visible to others.

-   **WORK | TRANSACTION**

    Specifies an optional keyword, which has no effect except increasing readability.


## Examples<a name="en-us_topic_0283137519_en-us_topic_0237122094_en-us_topic_0059779032_s3f09e6158972457085b1ef2184fe2f39"></a>

```
-- Create a table.
openGauss=# CREATE TABLE tpcds.customer_demographics_t2
(
    CD_DEMO_SK                INTEGER               NOT NULL,
    CD_GENDER                 CHAR(1)                       ,
    CD_MARITAL_STATUS         CHAR(1)                       ,
    CD_EDUCATION_STATUS       CHAR(20)                      ,
    CD_PURCHASE_ESTIMATE      INTEGER                       ,
    CD_CREDIT_RATING          CHAR(10)                      ,
    CD_DEP_COUNT              INTEGER                       ,
    CD_DEP_EMPLOYED_COUNT     INTEGER                       ,
    CD_DEP_COLLEGE_COUNT      INTEGER
)
WITH (ORIENTATION = COLUMN,COMPRESSION=MIDDLE)
;

-- Start a transaction.
openGauss=# START TRANSACTION;

-- Insert data.
openGauss=# INSERT INTO tpcds.customer_demographics_t2 VALUES(1,'M', 'U', 'DOCTOR DEGREE', 1200, 'GOOD', 1, 0, 0);
openGauss=# INSERT INTO tpcds.customer_demographics_t2 VALUES(2,'F', 'U', 'MASTER DEGREE', 300, 'BAD', 1, 0, 0);

-- Commit the transaction to make all changes permanent.
openGauss=# COMMIT;

-- Query data.
openGauss=# SELECT * FROM tpcds.customer_demographics_t2;

-- Delete the tpcds.customer_demographics_t2 table.
openGauss=# DROP TABLE tpcds.customer_demographics_t2;
```

## Helpful Links<a name="en-us_topic_0283137519_en-us_topic_0237122094_en-us_topic_0059779032_s652dd12556d94ac0a003244758ed74e8"></a>

[ROLLBACK](rollback.md)

