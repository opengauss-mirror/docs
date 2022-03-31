# DROP AGGREGATE<a name="EN-US_TOPIC_0000001080822720"></a>

## Function<a name="section173831846163116"></a>

**DROP AGGREGATE**  deletes an aggregate function.

## Precautions<a name="section786041713618"></a>

**DROP AGGREGATE**  deletes an existing aggregate function. Only the owner of the aggregate function can run this command.

## Syntax<a name="section1374719912321"></a>

```
DROP AGGREGATE [ IF EXISTS ] name ( argtype [ , ... ] ) [ CASCADE | RESTRICT ]
```

## Parameter Description<a name="section62781959163314"></a>

-   **IF EXISTS**

    Do not throw an error if the specified aggregation does not exist. A notice is issued in this case.

-   **name**

    Existing aggregate function name \(optionally schema-qualified\).

-   **argtype**

    Input data type of the aggregate function. To reference a zero-parameter aggregate function, use \* to replace the input data type list.

-   **CASCADE**

    Cascade deletes objects that depend on the aggregate function.

-   **RESTRICT**

    Refuses to delete the aggregate function if any objects depend on it. This is a default processing.


## Examples<a name="section14411351193419"></a>

Delete the aggregate function  **myavg**  of the integer type:

```
DROP AGGREGATE myavg(integer);
```

## Compatibility<a name="section9989313154010"></a>

The SQL standard does not provide the  **DROP AGGREGATE**  statement.

