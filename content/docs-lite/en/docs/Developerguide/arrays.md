# Arrays<a name="EN-US_TOPIC_0289900692"></a>

## Use of Array Types<a name="en-us_topic_0283137521_en-us_topic_0237122214_en-us_topic_0059778979_s9b23a1cdca6042f3ae428afa25038607"></a>

Before the use of arrays, an array type needs to be defined.

Define an array type immediately after the  **AS**  keyword in a stored procedure. The definition method is as follows:

```
TYPE array_type IS VARRAY(size) OF data_type;
```

In the preceding information:

-   **array\_type**: indicates the name of the array type to be defined.
-   **VARRAY**: indicates the array type to be defined.
-   **size**: indicates the maximum number of members in the array to be defined. The value is a positive integer.
-   **data\_type**: indicates the types of members in the array to be created.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   In openGauss, an array automatically increases. If an access violation occurs, a null value is returned, and no error message is reported.
>-   The scope of an array type defined in a stored procedure takes effect only in this stored procedure.
>-   It is recommended that you use one of the preceding methods to define an array type. If both methods are used to define the same array type, openGauss prefers the array type defined in a stored procedure to declare array variables.
>-   **data\_type**  can also be the record type defined in a stored procedure \(anonymous blocks are not supported\), but cannot be the array or set type defined in the stored procedure.

openGauss supports access to array elements by using parentheses, and it also supports the  **extend**,  **count**,  **first**,  **last**,  **prior**,  **exists**,  **trim**,  **next**, and  **delete**  functions.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   If a stored procedure contains a DML statement \(such as SELECT, UPDATE, INSERT, and DELETE\), you are advised to use square brackets to access array elements. Using parentheses will access arrays by default. If no array exists, function expressions will be identified.
>-   When the CLOB size is greater than 1 GB, the table of type, record type, and CLOB cannot be used in the input or output parameter, cursor, or raise info in a stored procedure.

