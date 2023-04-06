# PQprepare<a name="EN-US_TOPIC_0242380578"></a>

## Function<a name="en-us_topic_0241735620_section1434210205519"></a>

PQprepare is used to submit a request to create a prepared statement with given parameters and wait for completion.

## Prototype<a name="en-us_topic_0241735620_section16371223113414"></a>

```
PGresult *PQprepare(PGconn *conn,
                    const char *stmtName,
                    const char *query,
                    int nParams,
                    const Oid *paramTypes);
```

## Parameters<a name="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQprepare parameters

<a name="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="b6737115111303"><a name="b6737115111303"></a><a name="b6737115111303"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="b158668515309"><a name="b158668515309"></a><a name="b158668515309"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735620_p23111054217"><a name="en-us_topic_0241735620_p23111054217"></a><a name="en-us_topic_0241735620_p23111054217"></a>conn</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735620_p1393801515211"><a name="en-us_topic_0241735620_p1393801515211"></a><a name="en-us_topic_0241735620_p1393801515211"></a>Points to the object pointer that contains the connection information.</p>
</td>
</tr>
<tr id="en-us_topic_0241735620_row12654138171218"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735620_p196562861213"><a name="en-us_topic_0241735620_p196562861213"></a><a name="en-us_topic_0241735620_p196562861213"></a>stmtName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735620_p6656788128"><a name="en-us_topic_0241735620_p6656788128"></a><a name="en-us_topic_0241735620_p6656788128"></a>Name of <strong id="b9358459152714"><a name="b9358459152714"></a><a name="b9358459152714"></a>stmt</strong> to be executed.</p>
</td>
</tr>
<tr id="en-us_topic_0241735620_row208051436101312"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735620_p48063363137"><a name="en-us_topic_0241735620_p48063363137"></a><a name="en-us_topic_0241735620_p48063363137"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735620_p188061636131313"><a name="en-us_topic_0241735620_p188061636131313"></a><a name="en-us_topic_0241735620_p188061636131313"></a>Query string to be executed.</p>
</td>
</tr>
<tr id="en-us_topic_0241735620_row1088264091315"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735620_p18883164041313"><a name="en-us_topic_0241735620_p18883164041313"></a><a name="en-us_topic_0241735620_p18883164041313"></a>nParams</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735620_p3883240141320"><a name="en-us_topic_0241735620_p3883240141320"></a><a name="en-us_topic_0241735620_p3883240141320"></a>Parameter quantity.</p>
</td>
</tr>
<tr id="en-us_topic_0241735620_row76626539135"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241735620_p366216534138"><a name="en-us_topic_0241735620_p366216534138"></a><a name="en-us_topic_0241735620_p366216534138"></a>paramTypes</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0241735620_p1266320537138"><a name="en-us_topic_0241735620_p1266320537138"></a><a name="en-us_topic_0241735620_p1266320537138"></a>Array of the parameter type.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0241735620_en-us_topic_0237120432_en-us_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

**PGresult**  indicates the object pointer that contains the query result.

## Precautions<a name="en-us_topic_0241735620_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   PQprepare creates a prepared statement for later execution with PQexecPrepared. This function allows commands to be repeatedly executed, without being parsed and planned each time they are executed. PQprepare is supported only in protocol 3.0 or later. It will fail when protocol 2.0 is used.
-   This function creates a prepared statement named  **stmtName**  from the query string, which must contain an SQL command.  **stmtName**  can be  **""**  to create an unnamed statement. In this case, any pre-existing unnamed statement will be automatically replaced. Otherwise, this is an error if the statement name has been defined in the current session. If any parameters are used, they are referred to in the query as $1, $2, and so on.  **nParams**  is the number of parameters for which types are pre-specified in the array paramTypes\[\]. \(The array pointer can be  **NULL**  when  **nParams**  is  **0**.\) paramTypes\[\] specifies the data types to be assigned to the parameter symbols by OID. If  **paramTypes**  is  **NULL**, or any element in the array is  **0**, the server assigns a data type to the parameter symbol in the same way as it does for an untyped literal string. In addition, the query can use parameter symbols whose numbers are greater than  **nParams**. Data types of these symbols will also be inferred.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>You can also execute the  **SQLPREPARE**  statement to create a prepared statement that is used with PQexecPrepared. Although there is no libpq function of deleting a prepared statement, the  **SQL DEALLOCATE**  statement can be used for this purpose.  

## Example<a name="en-us_topic_0241735620_section13066285525"></a>

For details, see  [Example](example-3.md).

