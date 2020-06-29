# Arrays<a name="EN-US_TOPIC_0245374604"></a>

## Use of Array Types<a name="en-us_topic_0237122214_en-us_topic_0059778979_s9b23a1cdca6042f3ae428afa25038607"></a>

Before the use of arrays, an array type needs to be defined:

Define an array type immediately after the  **AS**  keyword in a stored procedure. The method is as follows:

```
TYPE array_type IS VARRAY(size) OF data_type;
```

In the preceding information:

-   **array\_type**: indicates the name of the array type to be defined.
-   **VARRAY**: indicates the array type to be defined.
-   **size**: indicates the maximum number of members in the array type to be defined. The value is a positive integer.
-   **data\_type**: indicates the types of members in the array type to be created.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   In openGauss, an array automatically increases. If an access violation occurs, a null value is returned, and no error message is reported.  
>-   The scope of an array type defined in a stored procedure takes effect only in this storage process.  
>-   It is recommended that you use one of the preceding methods to define an array type. If both methods are used to define the same array type, openGauss prefers the array type defined in a stored procedure to declare array variables.  

openGauss supports the access of contents in an array by using parentheses, and the  **extend**,  **count**,  **first**, and  **last**  functions.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the stored procedure contains the DML statement \(SELECT, UPDATE, INSERT, or DELETE\), DML statements can access array elements only using brackets. In this way, it may be separated from the function expression area.  

