# SQLDisconnect<a name="EN-US_TOPIC_0242371444"></a>

## Function<a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_sf1f063f9cda741e3bddd12ffff9982ea"></a>

SQLDisconnect is used to close the connection associated with a database connection handle.

## Prototype<a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_sa94159f087b8453d91742bd037a4dd23"></a>

```
SQLRETURN SQLDisconnect(SQLHDBC    ConnectionHandle);
```

## Parameter<a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_sed5e3f43dc554fcf87bcc0319da72ef0"></a>

**Table  1**  SQLDisconnect parameters

<a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_tf92662a862a94bb8a2ea829cbf5f90af"></a>
<table><thead align="left"><tr id="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_r28fb5700eaa54698a4340424276b87f4"><th class="cellrowborder" valign="top" width="24.5%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_ac9627e06109f453bac21c00c96534d27"><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_ac9627e06109f453bac21c00c96534d27"></a><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_ac9627e06109f453bac21c00c96534d27"></a><strong id="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a9e3d1cc49cc849e6a9dbfa5f277cc791"><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a9e3d1cc49cc849e6a9dbfa5f277cc791"></a><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a9e3d1cc49cc849e6a9dbfa5f277cc791"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="75.5%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a514195d887524d04b3ecee1f113764cb"><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a514195d887524d04b3ecee1f113764cb"></a><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a514195d887524d04b3ecee1f113764cb"></a><strong id="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_en-us_topic_0058965244_b447479391436"><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_en-us_topic_0058965244_b447479391436"></a><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_en-us_topic_0058965244_b447479391436"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_r0a0928672b2646d0a261d3ef7e26b596"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a80896ed0e4cc4f3fb5351a168f738731"><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a80896ed0e4cc4f3fb5351a168f738731"></a><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a80896ed0e4cc4f3fb5351a168f738731"></a>ConnectionHandle</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a701be46576314b7491c2cde0e48ada5b"><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a701be46576314b7491c2cde0e48ada5b"></a><a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_a701be46576314b7491c2cde0e48ada5b"></a>Connection handle, obtained from SQLAllocHandle.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_sec718cedec224638b6f21c68a66c165d"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_s62c3955fb6e942f58a6e780478d90554"></a>

If SQLDisconnect returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_DBC**  and  **ConnectionHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272890_en-us_topic_0237120420_en-us_topic_0059778556_sb7797f4e64534d1f85c319d5433804d4"></a>

See  [Examples](example-odbc.md).

