# DROP RULE<a name="EN-US_TOPIC_0306398143"></a>

## Function<a name="section5400959952"></a>

**DROP RULE**  deletes a rewriting rule.

## Syntax<a name="section157338176610"></a>

```
DROP RULE [ IF EXISTS ] name ON table_name [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="section652211111716"></a>

-   IF EXISTS

    If the rule does not exist, a  **NOTICE**  is thrown.

-   name

    Name of an existing rule to be deleted.

-   table\_name

    Name of the table to which the rule applies.

-   CASCADE

    Automatically cascade deletes objects that depend on this rule.

-   RESTRICT

    By default, if any objects depend on the rule, the rule cannot be deleted.


## Examples<a name="section192526392717"></a>

```
-- Delete a rewriting rule.
newruleDROP RULE newrule ON mytable;
```

