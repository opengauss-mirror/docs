# Use of Set Types<a name="EN-US_TOPIC_0000001153159330"></a>

Before the use of sets, a set type needs to be defined.

Define a set type immediately after the  **AS**  keyword in a stored procedure. The definition method is as follows:

![](figures/en-us_image_0000001153515022.png)

In the preceding information:

-   **table\_type**: indicates the name of the set type to be defined.
-   **TABLE**: indicates the set type to be defined.
-   **data\_type**: indicates the types of members in the set to be created.
-   **indexby\_type**: indicates the type of the set index to be created.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   In openGauss, a set automatically increases. If an access violation occurs, a null value is returned, and no error message is reported.
>-   The scope of a set type defined in a stored procedure takes effect only in this stored procedure.
>-   The index can only be of the integer or varchar type. The length of the varchar type is not restricted.
>-   **NOT NULL**  has no function but only takes effect in the syntax.
>-   **data\_type**  can also be the record type or set type defined in a stored procedure \(anonymous blocks are not supported\), but cannot be the array type.
>-   Variables of the nested set type cannot be used across packages.
>-   Variables of the  **TABLE OF** **index by**  type cannot be nested in a record as the input and output parameters of a stored procedure.
>-   Variables of the  **TABLE OF** **index by**  type cannot be used as input and output parameters of functions.
>-   The  **RAISE INFO**  command cannot be used to print the entire nested  **TABLE OF**  variable.
>-   The  **TABLE OF**  variable cannot be transferred across autonomous transactions.
>-   The input and output parameters of a stored procedure cannot be defined as the nested  **TABLE OF**  type.

openGauss supports access to set elements by using parentheses, and it also supports the  **extend**,  **count**,  **first**,  **last**,  **prior**,  **next**, and  **delete**  functions.

The set functions support  **multiset union**,  **intersect**,  **except all**, and  **distinct**.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>An expression can contain only one variable of the  **TABLE OF** **index by**  type.

