# ALTER AGGREGATE<a name="EN-US_TOPIC_0000001127682267"></a>

## Function<a name="section173831846163116"></a>

**ALTER AGGREGATE**  modifies the definition of an aggregate function.

## Precautions<a name="section786041713618"></a>

To use  **ALTER AGGREGATE**, you must be the owner of the aggregate function. To change the schema of an aggregate function, you must have the  **CREATE**  permission on the new schema. To change the owner, you must be a direct or indirect member of the new role, and the role must have the  **CREATE**  permission on the aggregate function's schema. \(This restricts the owner from doing anything except for deleting and recreating aggregate functions. However, a user with the SYSADMIN permission can change the ownership of an aggregate function in any way.\)

## Syntax<a name="section1374719912321"></a>

```
ALTER AGGREGATE name ( argtype [ , ... ] ) RENAME TO new_name
ALTER AGGREGATE name ( argtype [ , ... ] ) OWNER TO new_owner
ALTER AGGREGATE name ( argtype [ , ... ] ) SET SCHEMA new_schema
```

## Parameter Description<a name="section62781959163314"></a>

-   **name**

    Name \(optionally schema-qualified\) of an existing aggregate function.

-   **argtype**

    Input data type of the aggregate function. To reference a zero-parameter aggregate function, you can write an asterisk \(\*\) instead of a list of input data types.

-   **new\_name**

    New name of the aggregate function.

-   **new\_owner**

    New owner of the aggregate function.

-   **new\_schema**

    New schema of the aggregate function.


## Examples<a name="section14411351193419"></a>

Rename the aggregate function  **myavg**  that accepts integer-type parameters to  **my\_average**.

```
ALTER AGGREGATE myavg(integer) RENAME TO my_average;
```

Change the owner of the aggregate function  **myavg**  that accepts integer-type parameters to  **joe**.

```
ALTER AGGREGATE myavg(integer) OWNER TO joe;
```

Move the aggregate function  **myavg**  that accepts integer-type parameters to  **myschema**.

```
ALTER AGGREGATE myavg(integer) SET SCHEMA myschema;
```

## Compatibility<a name="section15847115116365"></a>

The SQL standard does not contain the  **ALTER AGGREGATE**  statement.
