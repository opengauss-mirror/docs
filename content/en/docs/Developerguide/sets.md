# Sets<a name="EN-US_TOPIC_0000001153159330"></a>

## Use of Set Types<a name="section28779381888"></a>

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

openGauss supports access to set elements by using parentheses, and it also supports the  **extend**,  **count**,  **first**,  **last**,  **prior**,  **next**, and  **delete**  functions.

The set functions support  **multiset union**,  **intersect**,  **except all**, and  **distinct**.

## Examples<a name="section93565513911"></a>

```
-- Perform operations on a set in the stored procedure.
openGauss=# CREATE OR REPLACE PROCEDURE table_proc
AS 
       TYPE TABLE_INTEGER IS TABLE OF INTEGER;-- Define the set type.
       TABLEINT TABLE_INTEGER := TABLE_INTEGER();  -- Declare the variable of the set type.
BEGIN 
       ARRINT.extend(10);  
       FOR I IN 1..10 LOOP  
               TABLEINT(I) := I; 
       END LOOP; 
       DBE_OUTPUT.PRINT_LINE(TABLEINT.COUNT);  
       DBE_OUTPUT.PRINT_LINE(TABLEINT(1));  
       DBE_OUTPUT.PRINT_LINE(TABLEINT(10)); 
END;  
/

-- Invoke the stored procedure.
openGauss=# CALL table_proc();

-- Delete the stored procedure.
openGauss=# DROP PROCEDURE table_proc;
```

