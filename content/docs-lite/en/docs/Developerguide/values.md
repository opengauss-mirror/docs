# VALUES<a name="EN-US_TOPIC_0289900362"></a>

## Function<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_s25c2a01507274648bf05cbcb1dc418bf"></a>

**VALUES**  computes a row or a set of rows based on given values. It is most commonly used to generate a constant table within a large statement.

## Precautions<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_s60091e11d710468f8772f6732699506b"></a>

-   **VALUES**  lists with large numbers of rows should be avoided, as you might encounter out-of-memory failures or poor performance.  **VALUES**  appearing within  **INSERT**  is a special case, because the desired column types are known from the  **INSERT**'s target table, and need not be inferred by scanning the  **VALUES**  list. In this case,  **VALUE**  can handle larger lists than are practical in other contexts.
-   If more than one row is specified, all the rows must have the same number of elements. 

## Syntax<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_sb9827c497faf4cc490614f51246dbc5b"></a>

```
VALUES {( expression [, ...] )} [, ...]
    [ ORDER BY { sort_expression [ ASC | DESC | USING operator ] } [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ];
```

## Parameter Description<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_s0a4a952823114ec6bfe2864b0af1db2f"></a>

-   **expression**

    Specifies a constant or expression to compute and insert at the indicated place in the resulting table or set of rows.

    In a  **VALUES**  list appearing at the top level of an  **INSERT**, an expression can be replaced by  **DEFAULT**  to indicate that the destination column's default value should be inserted.  **DEFAULT**  cannot be used when  **VALUES**  appears in other contexts.

-   **sort\_expression**

    Specifies an expression or integer constant indicating how to sort the result rows.

-   **ASC**

    Specifies an ascending sort order.

-   **DESC**

    Specifies a descending sort order.

-   **operator**

    Specifies a sorting operator.

-   **count**

    Specifies the maximum number of rows to return.

-   **OFFSET start \{ ROW | ROWS \}**

    Specifies the maximum number of returned rows, whereas  **start**  specifies the number of rows to skip before starting to return rows.

-   **FETCH \{ FIRST | NEXT \} \[ count \] \{ ROW | ROWS \} ONLY**

    The  **FETCH**  clause restricts the total number of rows starting from the first row of the return query result, and the default value of  **count**  is  **1**. 


## Examples<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_sdb42dc749d654038b498d0f77883ae8a"></a>

See  [Examples](insert.md#en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d)  in  **INSERT**.

