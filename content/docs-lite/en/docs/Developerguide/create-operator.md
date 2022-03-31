# CREATE OPERATOR<a name="EN-US_TOPIC_0000001080835908"></a>

## Function<a name="section173831846163116"></a>

CREATE OPERATOR defines a new operator.

## Precautions<a name="section786041713618"></a>

CREATE OPERATOR defines a new name operator. The user who defines the operator becomes the owner of the operator. If a schema name is given, the operator is created in the specified schema. Otherwise, it will be created in the current schema.

The operator name is a character string consisting of the following characters:

+ - \* / < \> = \~ ! @ \# % ^ & | \` ?

When selecting a name, note the following restrictions:

-   -- and /\* cannot appear anywhere in the operator name, because they are regarded as the beginning of a comment.
-   A multi-character operator cannot end with + or - unless the name contains at least one of the following characters:

    \~ ! @ \# % ^ & | \` ?

-   =\> The operator name is no longer used.

Operator! = is mapped to <\> when being entered. Therefore, the two names are always equivalent.

At least one LEFTARG and one RIGHTARG must be defined. For binocular operators, both need to be defined. For the right operator, only LEFTARG needs to be defined. For the left operator, only RIGHTARG needs to be defined.

Also, the function\_name procedure must have been defined with CREATE FUNCTION, and must be defined to accept the correct number of specified type parameters \(one or two\).

Other clauses declare optional operator optimization clauses. Their meanings are defined in  [Section 35.13](https://www.postgresql.org/docs/9.3/xoper-optimization.html).

To create an operator, you must have the USAGE permission on the parameter type and return type, and the EXECUTE permission on the underlying function. If exchange or negative operators are specified, you must have them.

## Syntax<a name="section8642194219107"></a>

```
CREATE OPERATOR name (
    PROCEDURE = function_name
    [, LEFTARG = left_type ] [, RIGHTARG = right_type ]
    [, COMMUTATOR = com_op ] [, NEGATOR = neg_op ]
    [, RESTRICT = res_proc ] [, JOIN = join_proc ]
    [, HASHES ] [, MERGES ]
)
```

## Parameter Description<a name="section16332145219811"></a>

-   **name**

    Operator to be defined. The available characters are listed above. The name can be schema-qualified, for example, CREATE OPERATOR myschema.+ \(...\). If there is no schema, the operator is created in the current schema. Two operators in the same schema can have the same name as long as they operate on different data types. This is a reloading process.

-   **function\_name**

    Function used to implement the operator.

-   **left\_type**

    Parameter data type on the left of the operator, if any. This parameter can be omitted if the left operator is used.

-   **right\_type**

    Parameter data type on the right of the operator, if any. This parameter can be omitted if the right-view operator is used.

-   **com\_op**

    Exchange operator corresponding to the operator.

-   **neg\_op**

    Negative operator corresponding to the operator.

-   **res\_proc**

    This operator constrains the selectivity evaluation function.

-   **join\_proc**

    This operator joins the selectivity evaluation function.

-   **HASHES**

    Indicates that the operator supports hash joins.

-   **MERGES**

    Indicates that this operator supports a merge join.

    Use the OPERATOR\(\) syntax to provide a schema-qualified operator name in com\_op or other optional parameters. For example:

    ```
    COMMUTATOR = OPERATOR(myschema.===) ,
    ```


## Example<a name="section64461832121211"></a>

The following command defines a new operator: equal area for the box data type.

```
CREATE OPERATOR === (
    LEFTARG = box,
    RIGHTARG = box,
    PROCEDURE = area_equal_procedure,
    COMMUTATOR = ===,
    NEGATOR = !==,
    RESTRICT = area_restriction_procedure,
    JOIN = area_join_procedure,
    HASHES, MERGES
);
```

