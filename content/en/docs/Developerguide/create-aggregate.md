# CREATE AGGREGATE<a name="EN-US_TOPIC_0000001127460521"></a>

## Function<a name="section12436651105814"></a>

**CREATE AGGREGATE**  defines a new aggregate function.

## Syntax<a name="section98552055195813"></a>

```
CREATE AGGREGATE name ( input_data_type [ , ... ] ) (
    SFUNC = sfunc,
    STYPE = state_data_type
    [ , FINALFUNC = ffunc ]
    [ , INITCOND = initial_condition ]
    [ , SORTOP = sort_operator ]
)

or the old syntax

CREATE AGGREGATE name (
    BASETYPE = base_type,
    SFUNC = sfunc,
    STYPE = state_data_type
    [ , FINALFUNC = ffunc ]
    [ , INITCOND = initial_condition ]
    [ , SORTOP = sort_operator ]
)
```

## Parameter Description<a name="section149920095912"></a>

-   **name**

    Name \(optionally schema-qualified\) of the aggregate function to be created.

-   **input\_data\_type**

    Data type of the input to be processed by the aggregate function. To create a zero-parameter aggregate function, you can use an asterisk \(\*\) instead of a list of input data types. \(count\(\*\) is an instance of this aggregate function.\)


-   **base\_type**

    In the  **CREATE AGGREGATE**  syntax, the input data type is specified by the  **basetype**  parameter instead of following  **name**. Note that the previous syntax allows only one input parameter. To create a zero-parameter aggregate function, you can set  **basetype**  to  **ANY**  instead of  **\***.


-   **sfunc**

    Name of the state conversion function that will be called on each input line. For an aggregate function with N parameters,  **sfunc**  must have more than one parameter. The first parameter is of the  **state\_data\_type**  type, and the other parameters match the declared input data types. The function must return a value of the  **state\_data\_type**  type. This function accepts the current state value and the current input data, and returns the next state value.


-   **state\_data\_type**

    Data type of the aggregation status value.


-   **ffunc**

    Final processing function called after all the input lines have been converted, which calculates the result of aggregation. This function must accept a parameter of  **state\_data\_type**. The output data type of the aggregation is defined as the return type of this function. If  **ffunc**  is not specified, the state value of the aggregation result is used as the aggregation result, and the output type is  **state\_data\_type**.


-   **initial\_condition**

    Initial setting \(value\) of a state value. It must be a text constant value acceptable to  **state\_data\_type**. If not specified, the initial state value is  **NULL**.


-   **sort\_operator**

    Sort operator used for MIN or MAX aggregation. This is just an operator name \(optionally schema-qualified\). This operator assumes that the input data type is the same as that of aggregation.


## Examples<a name="section14103104145915"></a>

```
CREATE AGGREGATE sum (complex)
(
    sfunc = complex_add,
    stype = complex,
    initcond = '(0,0)'
);

SELECT sum(a) FROM test_complex;

   sum
-----------
 (34,53.9)
```

