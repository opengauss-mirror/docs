# SET CONSTRAINTS<a name="EN-US_TOPIC_0289900402"></a>

## Function<a name="en-us_topic_0283136774_en-us_topic_0237122187_en-us_topic_0059779017_s016571300554457884633ea16394654e"></a>

**SET CONSTRAINTS**  sets the behavior of constraint checking within the current transaction.

**IMMEDIATE**  constraints are checked at the end of each statement.  **DEFERRED**  constraints are not checked until transaction commit. Each constraint has its own  **IMMEDIATE**  or  **DEFERRED**  mode.

Upon creation, a constraint is given one of three characteristics  **DEFERRABLE INITIALLY DEFERRED**,  **DEFERRABLE INITIALLY IMMEDIATE**, or  **NOT DEFERRABLE**. The third class is always  **IMMEDIATE**  and is not affected by the  **SET CONSTRAINTS**  statement. The first two classes start every transaction in specified modes, but its behaviors can be changed within a transaction by  **SET CONSTRAINTS**.

**SET CONSTRAINTS**  with a list of constraint names changes the mode of just those constraints \(which must all be deferrable\). If multiple constraints match a name, the name is affected by all of these constraints.  **SET CONSTRAINTS ALL**  changes the modes of all deferrable constraints.

When  **SET CONSTRAINTS**  changes the mode of a constraint from  **DEFERRED**  to  **IMMEDIATE**, the new mode takes effect retroactively: any outstanding data modifications that would have been checked at the end of the transaction are instead checked during the execution of the  **SET CONSTRAINTS**  statement. If any such constraint is violated, the  **SET CONSTRAINTS**  fails \(and does not change the constraint mode\). Therefore,  **SET CONSTRAINTS**  can be used to force checking of constraints to occur at a specific point in a transaction.

Constraints are always checked immediately when a row is inserted or modified.

## Precautions<a name="en-us_topic_0283136774_en-us_topic_0237122187_en-us_topic_0059779017_s321677998664492982aeded9dee52787"></a>

**SET CONSTRAINTS**  sets the behavior of constraint checking only within the current transaction. Therefore, if you execute this statement outside of a transaction block \(**START TRANSACTION/COMMIT**  pair\), it will not appear to have any effect.

## Syntax<a name="en-us_topic_0283136774_en-us_topic_0237122187_en-us_topic_0059779017_s8d239b808d544e6cbfdbf0be45ed052c"></a>

```
SET CONSTRAINTS  { ALL  |  { name  }  [, ...]  }  { DEFERRED  | IMMEDIATE  } ;
```

## Parameter Description<a name="en-us_topic_0283136774_en-us_topic_0237122187_en-us_topic_0059779017_sce8e8c2751c740879354a5adb7da996e"></a>

-   **name**

    Specifies the constraint name.

    Value range: an existing table name, which can be found in the system catalog  **pg\_constraint**.

-   **ALL**

    Specifies all constraints.

-   **DEFERRED**

    Specifies that constraints are not checked until transaction commit.

-   **IMMEDIATE**

    Specifies that constraints are checked at the end of each statement.


## Examples<a name="en-us_topic_0283136774_en-us_topic_0237122187_en-us_topic_0059779017_s1a9e95b23ffc4ba9b8873c7352f3d1f5"></a>

```
-- Set that constraints are checked when a transaction is committed.
openGauss=# SET CONSTRAINTS ALL DEFERRED;
```

