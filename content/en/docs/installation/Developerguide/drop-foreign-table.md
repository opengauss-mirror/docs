# DROP FOREIGN TABLE<a name="EN-US_TOPIC_0272283422"></a>

## Function<a name="section57611418144918"></a>

**DROP FOREIGN TABLE**  drops a foreign table.

## Precautions<a name="section67466306494"></a>

**DROP FOREIGN TABLE**  forcibly drops the specified table and the indexes depending on the table. After the table is dropped, the functions and stored procedures that need to use this table cannot be executed.

## Syntax<a name="section20143164116497"></a>

```
DROP FOREIGN TABLE [ IF EXISTS ] 
    table_name [, ...] [ CASCADE | RESTRICT ];
```

## Parameter Description<a name="section4910646204920"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if the specified table does not exist.

-   **table\_name**

    Table name

    Value range: an existing table name

-   **CASCADE | RESTRICT**

    -   **CASCADE**: automatically drops the objects \(such as views\) that depend on the table.

    -   **RESTRICT**: refuses to drop the table if any objects depend on it. This is the default action.



## Helpful Links<a name="section1811945514913"></a>

[ALTER FOREIGN TABLE](alter-foreign-table.md)  and  [CREATE FOREIGN TABLE](create-foreign-table.md)

