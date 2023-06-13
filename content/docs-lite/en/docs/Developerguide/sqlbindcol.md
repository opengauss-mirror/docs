# SQLBindCol<a name="EN-US_TOPIC_0242371440"></a>

## Function<a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_s20aba247faad4486a9207cbeafeadb20"></a>

SQLBindCol is used to bind columns in a result set to an application data buffer.

## Prototype<a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_sc0a085a7e70b42b49cf7383da395ecff"></a>

```
SQLRETURN SQLBindCol(SQLHSTMT       StatementHandle,    
                     SQLUSMALLINT   ColumnNumber,     
                     SQLSMALLINT    TargetType,
                     SQLPOINTER     TargetValuePtr,
                     SQLLEN     BufferLength,
                     SQLLEN     *StrLen_or_IndPtr);
```

## Parameters<a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_s2841a8589657411785ffbc5592840769"></a>

**Table  1**  SQLBindCol parameters

<a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_t7f7fe1edade94362b89ebdef0b3126a6"></a>
<table><thead align="left"><tr id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_r72a30279067e460fad862a72def9b6e1"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_ac7920d1a4420479097098517698b1203"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_ac7920d1a4420479097098517698b1203"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_ac7920d1a4420479097098517698b1203"></a><strong id="b32441323191516"><a name="b32441323191516"></a><a name="b32441323191516"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a4d0fbdd3d7a64b199c050ae0ad075667"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a4d0fbdd3d7a64b199c050ae0ad075667"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a4d0fbdd3d7a64b199c050ae0ad075667"></a><strong id="b16298114635316"><a name="b16298114635316"></a><a name="b16298114635316"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_rfa83bbcc32f142a3a9af948e06e8e0bb"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a86f9cfc2b6ff4f20a8d5df63c06236fb"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a86f9cfc2b6ff4f20a8d5df63c06236fb"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a86f9cfc2b6ff4f20a8d5df63c06236fb"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a35141cc74911451ab5b7bcba8069ccb7"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a35141cc74911451ab5b7bcba8069ccb7"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a35141cc74911451ab5b7bcba8069ccb7"></a>Statement handle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_r4a7ef1c7e62f464ab72600b1db11039c"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a98a0ed7d8b0641eca0be869c5db7a769"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a98a0ed7d8b0641eca0be869c5db7a769"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a98a0ed7d8b0641eca0be869c5db7a769"></a>ColumnNumber</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_aedf9517a97bf4396b931807eeaa5f298"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_aedf9517a97bf4396b931807eeaa5f298"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_aedf9517a97bf4396b931807eeaa5f298"></a>Number of the column to be bound. The column number starts with 0 and increases in ascending order. Column 0 is the bookmark column. If no bookmark column is set, column numbers start with 1.</p>
</td>
</tr>
<tr id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_r6b8382814fac430c9bf4db6e196bef7f"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a840906d6fab14950843227928136f0cd"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a840906d6fab14950843227928136f0cd"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a840906d6fab14950843227928136f0cd"></a>TargetType</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a616999bf01f44f1a88623f36ecb1927d"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a616999bf01f44f1a88623f36ecb1927d"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a616999bf01f44f1a88623f36ecb1927d"></a>C data type in the buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_r3f42cec37f3c461ca85429ed0295e46f"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_aa94b2a92905e405993904c14900f8287"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_aa94b2a92905e405993904c14900f8287"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_aa94b2a92905e405993904c14900f8287"></a>TargetValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_af54c62cd94d0485d8c3aa2cb8254fd3e"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_af54c62cd94d0485d8c3aa2cb8254fd3e"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_af54c62cd94d0485d8c3aa2cb8254fd3e"></a><strong id="b8445198133511"><a name="b8445198133511"></a><a name="b8445198133511"></a>Output parameter</strong>: pointer to the buffer bound with the column. The SQLFetch function returns data in the buffer. If <strong id="b0485129153516"><a name="b0485129153516"></a><a name="b0485129153516"></a>TargetValuePtr</strong> is null, <strong id="b84864911358"><a name="b84864911358"></a><a name="b84864911358"></a>StrLen_or_IndPtr</strong> is a valid value.</p>
</td>
</tr>
<tr id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_rb83e445fa64d43acbd64d9d5e18ee436"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a8a20742c0ba549afbfef0e5b0ea212e0"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a8a20742c0ba549afbfef0e5b0ea212e0"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a8a20742c0ba549afbfef0e5b0ea212e0"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a2cff0048329043e3af3a1b6176b2b877"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a2cff0048329043e3af3a1b6176b2b877"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a2cff0048329043e3af3a1b6176b2b877"></a>Length of the <strong id="b102246181733"><a name="b102246181733"></a><a name="b102246181733"></a>TargetValuePtr</strong> buffer in bytes.</p>
</td>
</tr>
<tr id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_rc74b270421da4002a3ae9c5f78021e83"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_adbb18013cfe746a4b3ac36fc398f4e3c"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_adbb18013cfe746a4b3ac36fc398f4e3c"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_adbb18013cfe746a4b3ac36fc398f4e3c"></a>StrLen_or_IndPtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a4f2a60901d4946c8b8d832116e826e2c"><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a4f2a60901d4946c8b8d832116e826e2c"></a><a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_a4f2a60901d4946c8b8d832116e826e2c"></a><strong id="b1780081063511"><a name="b1780081063511"></a><a name="b1780081063511"></a>Output parameter</strong>: pointer to the length or indicator of the buffer. If <strong id="b1246381113520"><a name="b1246381113520"></a><a name="b1246381113520"></a>StrLen_or_IndPtr</strong> is null, no length or indicator is used.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_s665d7a82265e43e9912a556d627ce508"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_sf12dfc561de44c8a9e952a9b13eda981"></a>

If SQLBindCol returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_STMT**  and  **StatementHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272886_en-us_topic_0237120416_en-us_topic_0059779335_sd5d16919fd6141598535fc735a91d4df"></a>

See  [Examples](example-odbc.md).

