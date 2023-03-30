# ABORT<a name="EN-US_TOPIC_0289900704"></a>

## Function<a name="en-us_topic_0283136750_en-us_topic_0237122053_en-us_topic_0059778271_s35ca23dd889c479da90f14c150c52f4b"></a>

**ABORT**  rolls back the current transaction and cancels the changes in the transaction.

This command is equivalent to  [ROLLBACK](rollback.md), and is present only for historical reasons. Now  **ROLLBACK**  is recommended.

## Precautions<a name="en-us_topic_0283136750_en-us_topic_0237122053_en-us_topic_0059778271_sa23945b94808484d82b947d70ee28dc6"></a>

**ABORT**  has no impact outside a transaction, but will throw a NOTICE message.

## Syntax<a name="en-us_topic_0283136750_en-us_topic_0237122053_en-us_topic_0059778271_s36354f226d754e5bb76ed954add5eea3"></a>

```
ABORT [ WORK | TRANSACTION ] ;
```

## Parameter Description<a name="en-us_topic_0283136750_en-us_topic_0237122053_en-us_topic_0059778271_s740ca09be515490cbbfb36db4e2fb13e"></a>

**WORK | TRANSACTION**

Specifies an optional keyword, which has no effect except increasing readability.

## Examples<a name="en-us_topic_0283136750_en-us_topic_0237122053_en-us_topic_0059778271_saa47e844dd304bcc8a75123e66d1fa37"></a>

```
-- Create the customer_demographics_t1 table.
openGauss=# CREATE TABLE customer_demographics_t1
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

-- Insert data.
openGauss=# INSERT INTO customer_demographics_t1 VALUES(1920801,'M', 'U', 'DOCTOR DEGREE', 200, 'GOOD', 1, 0,0);

-- Start a transaction.
openGauss=# START TRANSACTION;

-- Update the column.
openGauss=# UPDATE customer_demographics_t1 SET cd_education_status= 'Unknown';

-- Abort the transaction. All updates are rolled back.
openGauss=# ABORT; 

-- Query data.
openGauss=# SELECT * FROM customer_demographics_t1 WHERE cd_demo_sk = 1920801;
cd_demo_sk | cd_gender | cd_marital_status | cd_education_status  | cd_purchase_estimate | cd_credit_rating | cd_dep_count | cd_dep_employed_count | cd_dep_college_count 
------------+-----------+-------------------+----------------------+----------------------+------------------+--------------+-----------------------+----------------------
    1920801 | M         | U                 | DOCTOR DEGREE        |                  200 | GOOD             |            1 |                     0 |                    0
(1 row)

-- Delete the table.
openGauss=# DROP TABLE customer_demographics_t1;
```

## Helpful Links<a name="en-us_topic_0283136750_en-us_topic_0237122053_en-us_topic_0059778271_s51afa4e9c2fd4b07b11d4eb49fe546b8"></a>

[SET TRANSACTION](set-transaction.md),  [COMMIT | END](commit-end.md), and  [ROLLBACK](rollback.md)

