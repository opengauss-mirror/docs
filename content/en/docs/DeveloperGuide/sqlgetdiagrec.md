# SQLGetDiagRec<a name="EN-US_TOPIC_0242371454"></a>

## Function<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_s0088b32a977e44f5a1e1e2b1523fc51c"></a>

SQLGetDiagRec is used to return the current values of multiple fields in a diagnostic record that contains error, warning, and status information.

## Prototype<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_s75cbaa3f71d04c628d2c1afdf0f4d953"></a>

```
SQLRETURN  SQLGetDiagRec(SQLSMALLINT    HandleType
                         SQLHANDLE      Handle,
                         SQLSMALLINT    RecNumber,
                         SQLCHAR        *SQLState,
                         SQLINTEGER     *NativeErrorPtr,
                         SQLCHAR        *MessageText,
                         SQLSMALLINT    BufferLength
                         SQLSMALLINT    *TextLengthPtr);
```

## Parameter<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_sde16d4cd6f674b65822349c34adf7cc5"></a>

**Table  1**  SQLGetDiagRec parameters

<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_t8a641f9b30084f3f923130e22525006c"></a>
<table><thead align="left"><tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r7652c8a6e25d4f9d957ac5d0bf631e8d"><th class="cellrowborder" valign="top" width="19.12%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ac5fd7625177149458012aac4d28eca6f"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ac5fd7625177149458012aac4d28eca6f"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ac5fd7625177149458012aac4d28eca6f"></a><strong id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a3ee48ecbc02841d2bb7f54ec01dac79f"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a3ee48ecbc02841d2bb7f54ec01dac79f"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a3ee48ecbc02841d2bb7f54ec01dac79f"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="80.88%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a67097243b2644b5d850fe5c9edba2106"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a67097243b2644b5d850fe5c9edba2106"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a67097243b2644b5d850fe5c9edba2106"></a><strong id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_en-us_topic_0058965182_b968289214730"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_en-us_topic_0058965182_b968289214730"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_en-us_topic_0058965182_b968289214730"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r8421bf5306e14bb4b3b16eea80ce18f7"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a23d9c19dce7c4ab19e32056bbcdcdd02"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a23d9c19dce7c4ab19e32056bbcdcdd02"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a23d9c19dce7c4ab19e32056bbcdcdd02"></a>HandleType</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a0956a66a111b4a0b9e98eb0d3b75d4ed"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a0956a66a111b4a0b9e98eb0d3b75d4ed"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a0956a66a111b4a0b9e98eb0d3b75d4ed"></a>A handle-type identifier that describes the type of handle for which diagnostics are desired. The value must be one of the following:</p>
<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_u213e221424a9457ca4a15062bdf95df6"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_u213e221424a9457ca4a15062bdf95df6"></a><ul id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_u213e221424a9457ca4a15062bdf95df6"><li>SQL_HANDLE_ENV</li><li>SQL_HANDLE_DBC</li><li>SQL_HANDLE_STMT</li><li>SQL_HANDLE_DESC</li></ul>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_rc8d90a1599c94790a4565c59123d34b4"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aa33be41cfa824d75af602ea2df253ecc"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aa33be41cfa824d75af602ea2df253ecc"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aa33be41cfa824d75af602ea2df253ecc"></a>Handle</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_acd54460d1c39402bbd43b2fd6141afa9"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_acd54460d1c39402bbd43b2fd6141afa9"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_acd54460d1c39402bbd43b2fd6141afa9"></a>A handle for the diagnostic data structure. Its type is indicated by <strong id="en-us_topic_0238272900_b1837263205610"><a name="en-us_topic_0238272900_b1837263205610"></a><a name="en-us_topic_0238272900_b1837263205610"></a>HandleType</strong>. If <strong id="en-us_topic_0238272900_b842352706152426"><a name="en-us_topic_0238272900_b842352706152426"></a><a name="en-us_topic_0238272900_b842352706152426"></a>HandleType</strong> is <strong id="en-us_topic_0238272900_b842352706152428"><a name="en-us_topic_0238272900_b842352706152428"></a><a name="en-us_topic_0238272900_b842352706152428"></a>SQL_HANDLE_ENV</strong>, <strong id="en-us_topic_0238272900_b842352706152434"><a name="en-us_topic_0238272900_b842352706152434"></a><a name="en-us_topic_0238272900_b842352706152434"></a>Handle</strong> may be a shared or non-shared environment handle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_red32d4c46c5948638f58a2760d26adc0"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ad89ad535cbb74dd78a7dd10a9c0a9811"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ad89ad535cbb74dd78a7dd10a9c0a9811"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ad89ad535cbb74dd78a7dd10a9c0a9811"></a>RecNumber</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_abf7b434f548042b4b69ca0531b7b444d"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_abf7b434f548042b4b69ca0531b7b444d"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_abf7b434f548042b4b69ca0531b7b444d"></a>Status record from which the application seeks information. <strong id="en-us_topic_0238272900_b16729461573"><a name="en-us_topic_0238272900_b16729461573"></a><a name="en-us_topic_0238272900_b16729461573"></a>RecNumber</strong> starts with 1.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ra322ea6691df4122a8074eca2410384e"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a26626eac3a7b496da37587837bbfea66"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a26626eac3a7b496da37587837bbfea66"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a26626eac3a7b496da37587837bbfea66"></a>SQLState</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aa97c820304b849fb8d920f92495255dc"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aa97c820304b849fb8d920f92495255dc"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aa97c820304b849fb8d920f92495255dc"></a><strong id="en-us_topic_0238272900_b842352706153247"><a name="en-us_topic_0238272900_b842352706153247"></a><a name="en-us_topic_0238272900_b842352706153247"></a>Output parameter</strong>: pointer to a buffer that saves the 5-character <strong id="en-us_topic_0238272900_b842352706153252"><a name="en-us_topic_0238272900_b842352706153252"></a><a name="en-us_topic_0238272900_b842352706153252"></a>SQLSTATE</strong> code pertaining to <strong id="en-us_topic_0238272900_b842352706153257"><a name="en-us_topic_0238272900_b842352706153257"></a><a name="en-us_topic_0238272900_b842352706153257"></a>RecNumber</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r17e7c4dcfaca4983be860787b9e652a5"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a77f558f8c4444a10b28ea9d4083e7a15"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a77f558f8c4444a10b28ea9d4083e7a15"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a77f558f8c4444a10b28ea9d4083e7a15"></a>NativeErrorPtr</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_adc4a42ccec1e41f2a797b8e4e984d66b"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_adc4a42ccec1e41f2a797b8e4e984d66b"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_adc4a42ccec1e41f2a797b8e4e984d66b"></a><strong id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_en-us_topic_0058965182_b195510881471"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_en-us_topic_0058965182_b195510881471"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_en-us_topic_0058965182_b195510881471"></a>Output parameter</strong>: pointer to a buffer that saves the native error code.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r69d6871df9b244ef9c89f63234766757"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_adc5a8f65d6454123a2be4d95c4eed29e"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_adc5a8f65d6454123a2be4d95c4eed29e"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_adc5a8f65d6454123a2be4d95c4eed29e"></a>MessageText</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a71a3ba92ba1d44d1a7279cb8161fcc16"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a71a3ba92ba1d44d1a7279cb8161fcc16"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a71a3ba92ba1d44d1a7279cb8161fcc16"></a>Pointer to a buffer that saves text strings of diagnostic information.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r9cfafd4e60c44e6ea2e54feee0538d82"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ab19878b501094807a333e484772c2e02"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ab19878b501094807a333e484772c2e02"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ab19878b501094807a333e484772c2e02"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af9137bbefc86423aab1b1fba890a7329"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af9137bbefc86423aab1b1fba890a7329"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af9137bbefc86423aab1b1fba890a7329"></a>Length of <strong id="en-us_topic_0238272900_b16720027185814"><a name="en-us_topic_0238272900_b16720027185814"></a><a name="en-us_topic_0238272900_b16720027185814"></a>MessageText</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r90031695bb9d40ddbcd2c1571c1bc77c"><td class="cellrowborder" valign="top" width="19.12%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a030e52eda27d44138767506dd6a680f0"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a030e52eda27d44138767506dd6a680f0"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a030e52eda27d44138767506dd6a680f0"></a>TextLengthPtr</p>
</td>
<td class="cellrowborder" valign="top" width="80.88%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a718c4bd02e324559ba76e7511e4ed745"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a718c4bd02e324559ba76e7511e4ed745"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a718c4bd02e324559ba76e7511e4ed745"></a><strong id="en-us_topic_0238272900_b842352706153357"><a name="en-us_topic_0238272900_b842352706153357"></a><a name="en-us_topic_0238272900_b842352706153357"></a>Output parameter</strong>: pointer to the buffer, the total number of bytes in the returned <strong id="en-us_topic_0238272900_b842352706153415"><a name="en-us_topic_0238272900_b842352706153415"></a><a name="en-us_topic_0238272900_b842352706153415"></a>MessageText</strong>. If the number of bytes available to return is greater than <strong id="en-us_topic_0238272900_b842352706153423"><a name="en-us_topic_0238272900_b842352706153423"></a><a name="en-us_topic_0238272900_b842352706153423"></a>BufferLength</strong>, then the diagnostics information text in <strong id="en-us_topic_0238272900_b842352706153428"><a name="en-us_topic_0238272900_b842352706153428"></a><a name="en-us_topic_0238272900_b842352706153428"></a>MessageText</strong> is truncated to <strong id="en-us_topic_0238272900_b842352706153430"><a name="en-us_topic_0238272900_b842352706153430"></a><a name="en-us_topic_0238272900_b842352706153430"></a>BufferLength</strong> minus the length of the null termination character.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_s79113635891145b5b38d04f8c2a8fa71"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_s15c39d4749d544f1bbd489d994427ef7"></a>

SQLGetDiagRec does not release diagnostic records for itself. It uses the following return values to report execution results:

-   **SQL\_SUCCESS**  indicates that the function successfully returns diagnostic information.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that the  **\*MessageText**  buffer is too small to hold the requested diagnostic information. No diagnostic records are generated.
-   **SQL\_INVALID\_HANDLE**  indicates that the handle indicated by  **HandType**  and  **Handle**  is an invalid handle.
-   **SQL\_ERROR**  indicates that  **RecNumber**  is less than or equal to 0 or that  **BufferLength**  is smaller than 0.

If an ODBC function returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call SQLGetDiagRec to obtain the  **SQLSTATE**  value. The possible  **SQLSTATE**  values are listed as follows:

**Table  2**  SQLSTATE values

<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_t17be0e89f30840a9bcb9830d20727c4d"></a>
<table><thead align="left"><tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_rae2dc7b490504d3a9bc41b0a56b01887"><th class="cellrowborder" valign="top" width="20.352035203520348%" id="mcps1.2.4.1.1"><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a055fca93ed784961910cbb84f6d4b9f9"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a055fca93ed784961910cbb84f6d4b9f9"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a055fca93ed784961910cbb84f6d4b9f9"></a>SQLSATATE</p>
</th>
<th class="cellrowborder" valign="top" width="31.983198319831978%" id="mcps1.2.4.1.2"><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ad2db9ecefa7748b58cb9f4e262b1c4f2"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ad2db9ecefa7748b58cb9f4e262b1c4f2"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ad2db9ecefa7748b58cb9f4e262b1c4f2"></a>Error</p>
</th>
<th class="cellrowborder" valign="top" width="47.66476647664767%" id="mcps1.2.4.1.3"><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a99322a2bf4634e16b16722ac1de661da"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a99322a2bf4634e16b16722ac1de661da"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a99322a2bf4634e16b16722ac1de661da"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_rc3546003493948b286282a2cf83a84e2"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af485e77e78b24d80b902351eaeae6535"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af485e77e78b24d80b902351eaeae6535"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af485e77e78b24d80b902351eaeae6535"></a>HY000</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a9b2a0916f4424789b8916e5cf5a4b3a8"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a9b2a0916f4424789b8916e5cf5a4b3a8"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a9b2a0916f4424789b8916e5cf5a4b3a8"></a>General error.</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a4888a2977eb043d499eb0aaab6d5b993"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a4888a2977eb043d499eb0aaab6d5b993"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a4888a2977eb043d499eb0aaab6d5b993"></a>An error occurred for which there is no specific SQLSTATE.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r53d2074d51fb4e62b67b527e6507455b"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a1258a17c096541069553adfcdeb136b7"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a1258a17c096541069553adfcdeb136b7"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a1258a17c096541069553adfcdeb136b7"></a>HY001</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a8ac0b9ecb2f5462dbc58ed23605e4125"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a8ac0b9ecb2f5462dbc58ed23605e4125"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a8ac0b9ecb2f5462dbc58ed23605e4125"></a>Memory allocation error.</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_afb67b117387f4649be3a7097e2a1c547"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_afb67b117387f4649be3a7097e2a1c547"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_afb67b117387f4649be3a7097e2a1c547"></a>The driver is unable to allocate memory required to support execution or completion of the function.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r91c74c00e0354589a467e60acb4ad252"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a5d80615d7e09406daa1bf947758889e3"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a5d80615d7e09406daa1bf947758889e3"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a5d80615d7e09406daa1bf947758889e3"></a>HY008</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a5f029907623d4d4a949aba70aef726d2"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a5f029907623d4d4a949aba70aef726d2"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a5f029907623d4d4a949aba70aef726d2"></a>Operation canceled.</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ac2bd4da7520f460e9512493ef145331d"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ac2bd4da7520f460e9512493ef145331d"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_ac2bd4da7520f460e9512493ef145331d"></a>SQLCancel is called to terminate the statement execution, but the StatementHandle function is still called.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_reca8ca42a08a43d4b5a4be65504b78c9"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aee97592928914832828e501ef274570c"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aee97592928914832828e501ef274570c"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aee97592928914832828e501ef274570c"></a>HY010</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a7493ff015ed0473e8eb10249c2dd7050"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a7493ff015ed0473e8eb10249c2dd7050"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a7493ff015ed0473e8eb10249c2dd7050"></a>Function sequence error.</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a90d1fc792c6f4fc1a9afd8ffd8803c0e"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a90d1fc792c6f4fc1a9afd8ffd8803c0e"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a90d1fc792c6f4fc1a9afd8ffd8803c0e"></a>The function is called prior to sending data to data parameters or columns being executed.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_rb37083298b164ec3ac79b18d45abed97"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a4ac13f92d85745d8a564ae3ce962e821"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a4ac13f92d85745d8a564ae3ce962e821"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a4ac13f92d85745d8a564ae3ce962e821"></a>HY013</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_affb3fdee5a8c44c8a9f05d5bc9e6c028"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_affb3fdee5a8c44c8a9f05d5bc9e6c028"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_affb3fdee5a8c44c8a9f05d5bc9e6c028"></a>Memory management error.</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aae6ae797f12a4e219c8b1162a5927b2a"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aae6ae797f12a4e219c8b1162a5927b2a"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_aae6ae797f12a4e219c8b1162a5927b2a"></a>The function fails to be called. The error may be caused by low memory conditions.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_r72d9bb5b4d1d44119f67b62518ce3aa7"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a2e76848fdbde4a74a5088a36107ddcd6"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a2e76848fdbde4a74a5088a36107ddcd6"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a2e76848fdbde4a74a5088a36107ddcd6"></a>HYT01</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a35dfb52ce84f4e67902423f0c64d8dae"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a35dfb52ce84f4e67902423f0c64d8dae"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a35dfb52ce84f4e67902423f0c64d8dae"></a>Connection timeout.</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a387bee66577b404ebb5ee3d35d85b2c3"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a387bee66577b404ebb5ee3d35d85b2c3"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a387bee66577b404ebb5ee3d35d85b2c3"></a>The timeout period expired before the application was able to connect to the data source.</p>
</td>
</tr>
<tr id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_rfa171d35610c45ef833f549f90d80760"><td class="cellrowborder" valign="top" width="20.352035203520348%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a99e75700bc1148cb8ca38d8bceb5d89c"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a99e75700bc1148cb8ca38d8bceb5d89c"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a99e75700bc1148cb8ca38d8bceb5d89c"></a>IM001</p>
</td>
<td class="cellrowborder" valign="top" width="31.983198319831978%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af0bc113423374289b9d37d28a6e2bd2c"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af0bc113423374289b9d37d28a6e2bd2c"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_af0bc113423374289b9d37d28a6e2bd2c"></a>Function not supported by the driver.</p>
</td>
<td class="cellrowborder" valign="top" width="47.66476647664767%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a7490bf4e38344511966387267b13ed3c"><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a7490bf4e38344511966387267b13ed3c"></a><a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_a7490bf4e38344511966387267b13ed3c"></a>The called function is not supported by the StatementHandle driver.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0238272900_en-us_topic_0237120430_en-us_topic_0059778032_sf24dafb7ecbe4978ac9b0c0da42eaa19"></a>

See  [Examples](example-odbc.md).

