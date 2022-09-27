# CREATE CAST<a name="EN-US_TOPIC_0000001080982678"></a>

## Function<a name="section173831846163116"></a>

CREATE CAST defines a conversion.

## Syntax<a name="section1374719912321"></a>

```
CREATE CAST (source_type AS target_type)
    WITH FUNCTION function_name (argument_type [, ...])
    [ AS ASSIGNMENT | AS IMPLICIT ]

CREATE CAST (source_type AS target_type)
    WITHOUT FUNCTION
    [ AS ASSIGNMENT | AS IMPLICIT ]

CREATE CAST (source_type AS target_type)
    WITH INOUT
    [ AS ASSIGNMENT | AS IMPLICIT ]
```

## Parameter Description<a name="section62781959163314"></a>

-   **source\_type**

    Type of the source data to be converted.

-   **target\_type**

    Type of the target data to be converted.

-   **function\_name\(argument\_type \[, ...\]\)**

    Function used for conversion. The function name can be modified with a schema name. If it is not modified with a schema name, the function will be found in the schema search path. The result data type of the function must match the target type of the conversion. Its parameters are discussed below.

-   **WITHOUT FUNCTION**

    Indicates that the source type is a binary castable to the target type, so no function is needed to perform this conversion.

-   **WITH INOUT**

    Indicates that the conversion is an I/O conversion, which is performed by calling the output function of the source data type and transferring the result to the input function of the target data type.

-   **AS ASSIGNMENT**

    Indicates that the conversion can be implicitly called in assignment mode.

-   **AS IMPLICIT**

    Indicates that the transformation can be implicitly called in any environment.

    A conversion implementation function can have one to three parameters. The type of the first parameter must be the same as that of the source type to be converted, or can be forcibly converted from the binary of the source type to be converted. If the second parameter exists, it must be of the integer type. It receives these type modifiers associated with the target type, or  **-1**  if nothing is present. If the third parameter exists, it must be of the boolean type. If the conversion is an explicit type conversion,  **true**  is received. Otherwise,  **false**  is received.

    The return type of a conversion function must be the same as the target type of the conversion, or the binary of the target type of the conversion can be forcibly converted.

    Typically, a transformation must have different source and target data types. However, if there is a conversion implementation function with more than one parameter, it is allowed to declare a conversion with the same source and target types. This is used to represent a length enforcement function of a specific type in the system catalog. The named function is used to force a value of this type to be the type modifier value given by the second parameter.

    If the source type and target type of a type conversion are different and more than one parameter is received, it indicates that only one step is required to convert one type to another and the length conversion is performed at the same time. If no such item is available, converting to a type that uses a type modifier involves two steps, one to convert between data types, and the other to apply a conversion specified by the modifier.

    Currently, domain type conversion does not take effect. Transformations are typically targeted to the domain-related data types to which they belong.


## Example<a name="section14411351193419"></a>

To create an assignment mapping from type bigint to type int4, use the int4\(bigint\) function:

```
CREATE CAST (bigint AS int4) WITH FUNCTION int4(bigint) AS ASSIGNMENT;
```

\(The conversion has been predefined in the system.\)

## Compatibility<a name="section9989313154010"></a>

The CREATE CAST instruction complies with the SQL standard. Except that the SQL does not have extra parameters that can be forcibly converted to binary types or implement functions.

