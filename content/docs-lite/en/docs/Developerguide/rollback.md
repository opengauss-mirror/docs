# ROLLBACK<a name="EN-US_TOPIC_0289900944"></a>

## Function<a name="en-us_topic_0283137047_en-us_topic_0237122180_en-us_topic_0059778963_s332087a99fa4409188f6347dab075098"></a>

**ROLLBACK**  rolls back the current transaction and backs out all updates in the transaction.

**ROLLBACK**  backs out of all changes that a transaction makes to a database if the transaction fails to be executed due to a fault.

## Precautions<a name="en-us_topic_0283137047_en-us_topic_0237122180_en-us_topic_0059778963_s455120172ee44e1fbbb8af4e9b74e049"></a>

If a  **ROLLBACK**  statement is executed out of a transaction, no error occurs, but a notice is displayed.

## Syntax<a name="en-us_topic_0283137047_en-us_topic_0237122180_en-us_topic_0059778963_se0444f532b0e48bfafa13bbed139ef4a"></a>

```
ROLLBACK [ WORK | TRANSACTION ];
```

## Parameter Description<a name="en-us_topic_0283137047_en-us_topic_0237122180_en-us_topic_0059778963_scd7892be945e4ac7bfffeb96178c5ba9"></a>

**WORK | TRANSACTION**

Specifies the optional keyword. that more clearly illustrates the syntax.

## Examples<a name="en-us_topic_0283137047_en-us_topic_0237122180_en-us_topic_0059778963_s29be3deb19b740fba171f9403a8e4318"></a>

```
-- Start a transaction.
openGauss=# START TRANSACTION;

-- Back out all changes.
openGauss=# ROLLBACK;
```

## Helpful Links<a name="en-us_topic_0283137047_en-us_topic_0237122180_en-us_topic_0059778963_s1745a25c568b45c7ad9475ba14714358"></a>

[COMMIT | END](commit-end.md)

