# ALTER OPERATOR<a name="EN-US_TOPIC_0000001127812609"></a>

## Function<a name="section113331284191"></a>

ALTER OPERATOR modifies the definition of an operator.

## Precautions<a name="section1685724811811"></a>

ALTER OPERATOR changes the definition of an operator. Currently, the only function available is to change the owner of the operator.

To use ALTER OPERATOR, you must be the owner of the operator. To modify the owner, you must also be a direct or indirect member of the new owning role, and that member must have CREATE permission on the operator's schema. \(These restrictions force the owner to do nothing that cannot be done by deleting and recreating the operator. However, a user with the SYSADMIN permission can modify the ownership of any operator in any way.\)

## Syntax<a name="section122664751912"></a>

```
ALTER OPERATOR name ( { left_type | NONE } , { right_type | NONE } ) OWNER TO new_owner
ALTER OPERATOR name ( { left_type | NONE } , { right_type | NONE } ) SET SCHEMA new_schema
```

## Parameter Description<a name="section48568352146"></a>

-   **name**

    Name of an existing operator.

-   **left\_type**

    Data type of the left operand for the operator; if there is no left operand, write NONE.

-   **right\_type**

    Data type of the right operand for the operator; if there is no right operand, write NONE.

-   **new\_owner**

    New owner of the operator.

-   **new\_schema**

    New schema name of the operator.


## Example<a name="section95851353171318"></a>

Change a user-defined operator for text a @@ b:

```
ALTER OPERATOR @@ (text, text) OWNER TO joe;
```

## Compatibility<a name="section135891317111410"></a>

The SQL standard does not contain the ALTER OPERATOR statement.

