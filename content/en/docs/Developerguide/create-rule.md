# CREATE RULE<a name="EN-US_TOPIC_0306398142"></a>

## Function<a name="section189661819135511"></a>

**CREATE RULE**  defines a new rewriting rule.

## Precautions<a name="section7961133411551"></a>

-   To define or modify rules for a table, you must be the owner of the table.
-   If multiple rules of the same type are defined for the same table, the rules are triggered one by one by name in alphabetical order.
-   In the view, the  **RETURNING**  clause can be added to the  **INSERT**,  **UPDATE**, and  **DELETE**  rules to return columns by view. If a rule is triggered by the  **INSERT RETURNING**,  **UPDATE RETURNING**, or  **DELETE RETURNING**  command, these clauses are used to calculate the output result. If a rule is triggered by a command without  **RETURNING**, the  **RETURNING**  clause of the rule is ignored. Currently, only unconditional  **INSTEAD**  rules can contain the  **RETURNING**  clause, and only one  **RETURNING**  clause can exist in all rules of one event. This ensures that only one  **RETURNING**  clause can be used for result calculation. If the  **RETURNING**  clause does not exist in any valid rule, the  **RETURNING**  query in this view will be rejected.
-   Currently,  **ON SELECT**  rules must be unconditional  **INSTEAD**  rules and must have actions consisting of a single  **SELECT**  command. Therefore, an  **ON SELECT**  rule actually turns a table into a view whose visible content is the content returned by the  **SELECT**  command of the rule, rather than the content in the table \(if any\).
-   You are not advised to use column-store tables in rules, especially for write operations. The architecture implementation and transaction processing of column-store tables are greatly different from those of row-store tables. Therefore, the rule performance of column-store tables is different from that of row-store tables.

## Syntax<a name="section139076585551"></a>

```
CREATE [ OR REPLACE ] RULE name AS ON event
    TO table_name [ WHERE condition ]
    DO [ ALSO | INSTEAD ] { NOTHING | command | ( command ; command ... ) }
```

Events include:

```
SELECT
INSERT
DELETE
UPDATE
```

## Parameter Description<a name="section169527814566"></a>

-   name

    Name of the created rule. It must be unique among all the rules for the same table.

    Value range: a string, which complies with the identifier naming convention and contains a maximum of 63 characters.

-   event

    One of the  **SELECT**,  **INSERT**,  **UPDATE**, and  **DELETE**  events.

-   table\_name

    Name \(optionally schema-qualified\) of the table or view to which the rule applies.

-   condition

    SQL condition expression that returns a Boolean value, which determines whether to execute the rule. Expressions cannot reference any table except  **NEW**  and  **OLD**, and cannot have aggregate functions. You are not advised to use numeric types such as int for  **condition**, because such types can be implicitly converted to bool values \(non-zero values are implicitly converted to  **true**  and  **0**  is implicitly converted to  **false**\), which may cause unexpected results.

-   INSTEAD

    **INSTEAD**  indicates that the initial event is replaced with this command.

-   ALSO

    **ALSO**  indicates that the command should be executed after the initial event. If neither  **ALSO**  nor  **INSTEAD**  is specified,  **ALSO**  is the default value.

-   command

    Command that composes the rule action. A valid command is one of the  **SELECT**,  **INSERT**,  **UPDATE**, and  **DELETE**  statements.


## Examples<a name="section8357162720577"></a>

```
 CREATE RULE "_RETURN" AS
    ON SELECT TO t1
    DO INSTEAD
        SELECT * FROM t2;
```

