# SQLAllocHandle<a name="EN-US_TOPIC_0242371438"></a>

## Function<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_sa9bd6e837fd4458199f7b677e876f4a9"></a>

SQLAllocHandle is used to allocate environment, connection, statement, or descriptor handles. This function replaces the deprecated ODBC 2.x functions SQLAllocEnv, SQLAllocConnect, and SQLAllocStmt.

## Prototype<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_s311ac101dcb74b3abb5b3d2ee9781c2c"></a>

```
SQLRETURN SQLAllocHandle(SQLSMALLINT   HandleType,    
                         SQLHANDLE     InputHandle,     
                         SQLHANDLE     *OutputHandlePtr);
```

## Parameter<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_s3488a4902c544a86ae94d239d63e21a9"></a>

**Table  1**  SQLAllocHandle parameters

<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_t753453111a55495490879cf0a4b36cf6"></a>
<table><thead align="left"><tr id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_r91a64b4bccf441acbcb74615b079d506"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a1cfb85f5e73d458d816d5f5b5e9538cd"></a><strong id="en-us_topic_0238272884_b19998125264912"><a name="en-us_topic_0238272884_b19998125264912"></a><a name="en-us_topic_0238272884_b19998125264912"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a644b26f36c9f43c7976f5726d8459b5c"></a><strong id="en-us_topic_0238272884_b557778195010"><a name="en-us_topic_0238272884_b557778195010"></a><a name="en-us_topic_0238272884_b557778195010"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_r95533e861d6f43a6a61550c0fae09557"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a9d687882356144d0aedf0791c0fb3b9e"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a9d687882356144d0aedf0791c0fb3b9e"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a9d687882356144d0aedf0791c0fb3b9e"></a>HandleType</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_af3af585891f340b49049298be113dce4"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_af3af585891f340b49049298be113dce4"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_af3af585891f340b49049298be113dce4"></a>Type of handle to be allocated by SQLAllocHandle. The value must be one of the following:</p>
<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_u90955fc4279f4f8481eba83586fa8eb8"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_u90955fc4279f4f8481eba83586fa8eb8"></a><ul id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_u90955fc4279f4f8481eba83586fa8eb8"><li>SQL_HANDLE_ENV (environment handle)</li><li>SQL_HANDLE_DBC (connection handle)</li><li>SQL_HANDLE_STMT (statement handle)</li><li>SQL_HANDLE_DESC (descriptor handle)</li></ul>
<p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a0214a0e9219d4856874070000e4365ba"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a0214a0e9219d4856874070000e4365ba"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a0214a0e9219d4856874070000e4365ba"></a>The handle application sequence is: <strong id="en-us_topic_0238272884_b842352706171638"><a name="en-us_topic_0238272884_b842352706171638"></a><a name="en-us_topic_0238272884_b842352706171638"></a>SQL_HANDLE_ENV</strong> &gt; <strong id="en-us_topic_0238272884_b842352706171641"><a name="en-us_topic_0238272884_b842352706171641"></a><a name="en-us_topic_0238272884_b842352706171641"></a>SQL_HANDLE_DBC</strong> &gt; <strong id="en-us_topic_0238272884_b842352706171647"><a name="en-us_topic_0238272884_b842352706171647"></a><a name="en-us_topic_0238272884_b842352706171647"></a>SQL_HANDLE_STMT</strong>. The handle applied later depends on the handle applied prior to it.</p>
</td>
</tr>
<tr id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_race60e037af742c4a011f7c18a80d268"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a2dfff073d7ad4d95b80262a49b73153b"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a2dfff073d7ad4d95b80262a49b73153b"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a2dfff073d7ad4d95b80262a49b73153b"></a>InputHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a45d5b00a851546bc9460a2501fba8759"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a45d5b00a851546bc9460a2501fba8759"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a45d5b00a851546bc9460a2501fba8759"></a>Existing handle to use as a context for the new handle being allocated.</p>
<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_u6d4579039a794155ac40f065ad1002e0"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_u6d4579039a794155ac40f065ad1002e0"></a><ul id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_u6d4579039a794155ac40f065ad1002e0"><li>If <strong id="en-us_topic_0238272884_b842352706171827"><a name="en-us_topic_0238272884_b842352706171827"></a><a name="en-us_topic_0238272884_b842352706171827"></a>HandleType</strong> is <strong id="en-us_topic_0238272884_b842352706171831"><a name="en-us_topic_0238272884_b842352706171831"></a><a name="en-us_topic_0238272884_b842352706171831"></a>SQL_HANDLE_ENV</strong>, this parameter is set to <strong id="en-us_topic_0238272884_b14284062198"><a name="en-us_topic_0238272884_b14284062198"></a><a name="en-us_topic_0238272884_b14284062198"></a>SQL_NULL_HANDLE</strong>.</li><li>If <strong id="en-us_topic_0238272884_b14496131417192"><a name="en-us_topic_0238272884_b14496131417192"></a><a name="en-us_topic_0238272884_b14496131417192"></a>HandleType</strong> is <strong id="en-us_topic_0238272884_b159720174196"><a name="en-us_topic_0238272884_b159720174196"></a><a name="en-us_topic_0238272884_b159720174196"></a>SQL_HANDLE_DBC</strong>, this parameter value must be an environment handle.</li><li>If <strong id="en-us_topic_0238272884_b842352706171833"><a name="en-us_topic_0238272884_b842352706171833"></a><a name="en-us_topic_0238272884_b842352706171833"></a>HandleType</strong> is <strong id="en-us_topic_0238272884_b842352706171835"><a name="en-us_topic_0238272884_b842352706171835"></a><a name="en-us_topic_0238272884_b842352706171835"></a>SQL_HANDLE_STMT</strong> or <strong id="en-us_topic_0238272884_b842352706171839"><a name="en-us_topic_0238272884_b842352706171839"></a><a name="en-us_topic_0238272884_b842352706171839"></a>SQL_HANDLE_DESC</strong>, this parameter value must be a connection handle.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_r0fe9aba8e62e47b6a77a6512e40e19bc"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a870eea2acc264875b6f3ca487610bd48"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a870eea2acc264875b6f3ca487610bd48"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a870eea2acc264875b6f3ca487610bd48"></a>OutputHandlePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a22ab6d451e7c41c791ba2bb971ea8d65"><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a22ab6d451e7c41c791ba2bb971ea8d65"></a><a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_a22ab6d451e7c41c791ba2bb971ea8d65"></a><strong id="en-us_topic_0238272884_b842352706171914"><a name="en-us_topic_0238272884_b842352706171914"></a><a name="en-us_topic_0238272884_b842352706171914"></a>Output parameter</strong>: Pointer to a buffer that stores the returned handle in the newly allocated data structure.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_s8136c512ac4e4481a73d8640d73d26d2"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_s9076893176f14464a773531cbd9e81b4"></a>

If SQLAllocHandle returns  **SQL\_ERROR**  when it is used to allocate a non-environment handle, it sets  **OutputHandlePtr**  to  **SQL\_NULL\_HDBC**,  **SQL\_NULL\_HSTMT**, or  **SQL\_NULL\_HDESC**. The application can then call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to the value of  **IntputHandle**, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272884_en-us_topic_0237120414_en-us_topic_0059778058_sb7bc1f5b242e441583cf7237bb33199b"></a>

See  [Examples](example-odbc.md).

