# DROP OPERATOR<a name="EN-US_TOPIC_0000001080547824"></a>

## Function<a name="section113331284191"></a>

DROP OPERATOR deletes an operator.

## Precautions<a name="section1685724811811"></a>

The DROP OPERATOR statement deletes an existing operator from the database. To execute this command, you must be the owner of the operator.

## Syntax<a name="section122664751912"></a>

```
DROP OPERATOR [ IF EXISTS ] name ( { left_type | NONE } , { right_type | NONE } ) [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="section48568352146"></a>

-   **IF EXISTS**

    Do not throw an error if the specified operator does not exist. A notice is issued in this case.

-   **name**

    Name \(optionally schema-qualified\) of an existing operator.

-   **left\_type**

    Type of the left operand for the operator. If no, set this parameter to  **NONE**.

-   **right\_type**

    Type of the right operand for the operator. If no, set this parameter to  **NONE**.

-   **CASCADE**

    Automatically drops all objects that depend on this operator.

-   **RESTRICT**

    Refuses to delete the operator if any objects depend on it. This is a default parameter.


## Example<a name="section95851353171318"></a>

Delete the power operator a^b used for integer.

```
DROP OPERATOR ^ (integer, integer);
```

Delete the left unary bit operator \~b for the bit type.

```
DROP OPERATOR ~ (none, bit);
```

Delete the factorial x used for bigint.:

```
DROP OPERATOR ! (bigint, none);
```

## Compatibility<a name="section135891317111410"></a>

The SQL standard does not contain the DROP OPERATOR statement.

