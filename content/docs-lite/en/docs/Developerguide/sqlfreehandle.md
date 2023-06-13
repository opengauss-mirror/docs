# SQLFreeHandle<a name="EN-US_TOPIC_0242371450"></a>

## Function<a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_s93f9114d62c04cfa917e8ebc927ec8e9"></a>

SQLFreeHandle is used to release resources associated with a specific environment, connection, or statement handle. It replaces the ODBC 2.x functions: SQLFreeEnv, SQLFreeConnect, and SQLFreeStmt.

## Prototype<a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_s4914d0218ea7413d8329f30f387e9d20"></a>

```
SQLRETURN SQLFreeHandle(SQLSMALLINT   HandleType,    
                        SQLHANDLE     Handle);
```

## Parameter<a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_s1f4c6ec0fbe74bdeb4d54275951b273b"></a>

**Table  1**  SQLFreeHandle parameters

<a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_t66a20b0983cd4bdc851236a6b6052b68"></a>
<table><thead align="left"><tr id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_r5250c653c88a40f0a1df3919130d943b"><th class="cellrowborder" valign="top" width="29.69%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_aa178f2520013480ba193fd68db0bac40"><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_aa178f2520013480ba193fd68db0bac40"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_aa178f2520013480ba193fd68db0bac40"></a><strong id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a9671d5868c354ed5945a5c5a11132bd3"><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a9671d5868c354ed5945a5c5a11132bd3"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a9671d5868c354ed5945a5c5a11132bd3"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="70.30999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_ae6482e5bda4a4f578befc3488a3c39ac"><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_ae6482e5bda4a4f578befc3488a3c39ac"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_ae6482e5bda4a4f578befc3488a3c39ac"></a><strong id="en-us_topic_0238272896_b0572245144219"><a name="en-us_topic_0238272896_b0572245144219"></a><a name="en-us_topic_0238272896_b0572245144219"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_r01fe5cb97f5a4007a4607cbe7fdbb4d5"><td class="cellrowborder" valign="top" width="29.69%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_aa45ae769af214f6184dedb9f4ac1f30c"><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_aa45ae769af214f6184dedb9f4ac1f30c"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_aa45ae769af214f6184dedb9f4ac1f30c"></a>HandleType</p>
</td>
<td class="cellrowborder" valign="top" width="70.30999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a4360b64617a748a3a7793749add2b498"><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a4360b64617a748a3a7793749add2b498"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a4360b64617a748a3a7793749add2b498"></a>Type of handle to be freed by SQLFreeHandle. The value must be one of the following:</p>
<a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_u6edc5cbf69e7445fb3fc99bfdee1af15"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_u6edc5cbf69e7445fb3fc99bfdee1af15"></a><ul id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_u6edc5cbf69e7445fb3fc99bfdee1af15"><li>SQL_HANDLE_ENV</li><li>SQL_HANDLE_DBC</li><li>SQL_HANDLE_STMT</li><li>SQL_HANDLE_DESC</li></ul>
<p id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_ad81c005237984ad2bd6b845962ee17ac"><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_ad81c005237984ad2bd6b845962ee17ac"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_ad81c005237984ad2bd6b845962ee17ac"></a>If <strong id="en-us_topic_0238272896_b842352706145246"><a name="en-us_topic_0238272896_b842352706145246"></a><a name="en-us_topic_0238272896_b842352706145246"></a>HandleType</strong> is not one of the preceding values, SQLFreeHandle returns <strong id="en-us_topic_0238272896_b18704112514311"><a name="en-us_topic_0238272896_b18704112514311"></a><a name="en-us_topic_0238272896_b18704112514311"></a>SQL_INVALID_HANDLE</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_r9cccfc8cd9ff47aaa3c38b05f1fd8969"><td class="cellrowborder" valign="top" width="29.69%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a99481f8bb3da4b9eb914310338ac62ed"><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a99481f8bb3da4b9eb914310338ac62ed"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a99481f8bb3da4b9eb914310338ac62ed"></a>Handle</p>
</td>
<td class="cellrowborder" valign="top" width="70.30999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a1f4227a27a464b30b9af52942e73489d"><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a1f4227a27a464b30b9af52942e73489d"></a><a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_a1f4227a27a464b30b9af52942e73489d"></a>Name of the handle to be freed.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_s97bab15517c347d8854c982f7e8bfae1"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_seb4dad2a49aa45de9411b5f3391d16ea"></a>

If SQLFreeHandle returns  **SQL\_ERROR**, the handle is still valid.

## Example<a name="en-us_topic_0238272896_en-us_topic_0237120426_en-us_topic_0059779231_s877f1d1111e8452fbea6495355622686"></a>

See  [Examples](example-odbc.md).

