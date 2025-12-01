# ALTER RULE<a name="EN-US_TOPIC_0306398141"></a>

## Function<a name="section1858233912452"></a>

**ALTER RULE**  modifies the definition of a rule.

## Precautions<a name="section13721922472"></a>

-   You must be the owner of the table or view to which the specified rule is applied.
-   Currently, only the rule name can be modified.

## Syntax<a name="section3737121410476"></a>

```
ALTER RULE name ON table_name RENAME TO new_name
```

## Parameter Description<a name="section125214834718"></a>

-   name

    Name of the rule to be modified.

-   table\_name

    Name of the table to which the specified rule is applied.

    Value range: name of an existing table in the database

-   new\_name

    New name of a rule.


## Examples<a name="section1538315160485"></a>

```
ALTER RULE notify_all ON emp RENAME TO notify_me;
```

