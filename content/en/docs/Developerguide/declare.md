# DECLARE<a name="EN-US_TOPIC_0289900564"></a>

## Function<a name="en-us_topic_0283137571_en-us_topic_0237122130_en-us_topic_0059777616_sf3fcf0507ea74a0ba4c4b4cbf0a0a8ba"></a>

**DECLARE**  defines a cursor to retrieve a small number of rows at a time out of a larger query and can be the start of an anonymous block.

This section describes usage of cursors. The usage of anonymous blocks is available in  [BEGIN](begin.md).

To process SQL statements, the stored procedure process assigns a memory segment to store context association. Cursors are handles or pointers pointing to context regions. With cursors, stored procedures can control alterations in context regions.

Generally,  **CURSOR**  and  **SELECT**  both have text returns. Since data is stored in binary format in the system, the system needs to convert the data from the binary format to the text format. If data is returned in text format, client applications need to convert the data back to the binary format for processing.  **FETCH**  implements conversion between binary data and text data.

## Precautions<a name="en-us_topic_0283137571_en-us_topic_0237122130_en-us_topic_0059777616_s8f58e1ff1b9849b2845f196df6352f13"></a>

-   **CURSOR**  is used only in transaction blocks.
-   Binary cursors should be used carefully. Text usually occupies larger space than binary data. A binary cursor returns internal binary data, which is easier to operate. A text cursor returns text, which is easier to retrieve and therefore reduces workload on the client. As an example, if a query returns a value of one from an integer column, you would get a string of 1 with a default cursor, whereas with a binary cursor you would get a 4-byte field containing the internal representation of the value \(in big-endian byte order\).

## Syntax<a name="en-us_topic_0283137571_en-us_topic_0237122130_en-us_topic_0059777616_s77068dc6043742e086ef7bfea9075223"></a>

-   Define a cursor.

    ```
    DECLARE cursor_name [ BINARY ] [ NO SCROLL ]
        CURSOR [ { WITH | WITHOUT } HOLD ] FOR query ;
    ```

-   Enable an anonymous block.

    ```
    [DECLARE [declare_statements]] 
    BEGIN
    execution_statements
    END;
    /
    ```


## Parameter Description<a name="en-us_topic_0283137571_en-us_topic_0237122130_en-us_topic_0059777616_safdd83ccfa754a3188de60962295adad"></a>

-   **cursor\_name**

    Specifies the name of the cursor to be created.

    Value range: a string. It must comply with the naming convention.

-   **BINARY**

    Causes the cursor to return data in binary rather than in text format.

-   **NO SCROLL**

    Specifies how the cursor retrieves rows.

    -   **NO SCROLL**: specifies that the cursor cannot be used to retrieve rows in a nonsequential fashion.
    -   Unspecified: Based on the query's execution plan, the system automatically determines whether the cursor can be used to retrieve rows in a nonsequential fashion.

-   **WITH HOLD**

    **WITHOUT HOLD**

    Specifies whether the cursor can continue to be used after the transaction that created it successfully commits.

    -   **WITH HOLD**: The cursor can continue to be used after the transaction that created it successfully commits.
    -   **WITHOUT HOLD**: The cursor cannot be used outside of the transaction that created it.
    -   If neither  **WITH HOLD**  nor  **WITHOUT HOLD**  is specified, the default is  **WITHOUT HOLD**.

-   **query**

    Uses a  **SELECT**  or  **VALUES**  clause to specify the rows to be returned by the cursor.

    Value range:  **SELECT**  or  **VALUES**  clause

-   **declare\_statements**

    Declares a variable, including its name and type, for example,  **sales\_cnt int**.

-   **execution\_statements**

    Specifies the statement to be executed in an anonymous block.

    Value range: an existing function name


## Examples<a name="en-us_topic_0283137571_en-us_topic_0237122130_en-us_topic_0059777616_s5587dfafbfee44509237e4eb718ccc55"></a>

For details about how to define a cursor, see  [Examples](fetch.md#en-us_topic_0283137321_en-us_topic_0237122165_en-us_topic_0059778422_s1ee72832a27547e4949061a010e24578)  in  **FETCH**.

## Helpful Links<a name="en-us_topic_0283137571_en-us_topic_0237122130_en-us_topic_0059777616_sb9bc0f8b2b464231a9dc551fa79f0485"></a>

[BEGIN](begin.md)  and  [FETCH](fetch.md)

