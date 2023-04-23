# SQLColAttribute<a name="EN-US_TOPIC_0242371442"></a>

## Function<a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_scc387c9cd5a14083903b16db19a589da"></a>

SQLColAttribute is used to return the descriptor information about a column in the result set.

## Prototype<a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_se76fe01df92c444b960a085f65094cb8"></a>

```
SQLRETURN SQLColAttibute(SQLHSTMT        StatementHandle,    
                         SQLUSMALLINT    ColumnNumber,     
                         SQLUSMALLINT    FieldIdentifier,
                         SQLPOINTER      CharacterAtrriburePtr,
                         SQLSMALLINT     BufferLength,
                         SQLSMALLINT     *StringLengthPtr,
                         SQLLEN       *NumericAttributePtr);
```

## Parameters<a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_sa001ba56cc7645ff9545f1ea44d918ec"></a>

**Table  1**  SQLColAttribute parameters

<a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_tce7a2910d5584220bd6408910e7d1f01"></a>
<table><thead align="left"><tr id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_r2a507b596db649a78b8b392da81f373a"><th class="cellrowborder" valign="top" width="26.86%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_aa3cd2f5c77704e3386b700ee022b0f8a"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_aa3cd2f5c77704e3386b700ee022b0f8a"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_aa3cd2f5c77704e3386b700ee022b0f8a"></a><strong id="b1594575501416"><a name="b1594575501416"></a><a name="b1594575501416"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="73.14%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a05b0cf25fecb4ebf85a24417b30e34ff"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a05b0cf25fecb4ebf85a24417b30e34ff"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a05b0cf25fecb4ebf85a24417b30e34ff"></a><strong id="b49745614143"><a name="b49745614143"></a><a name="b49745614143"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_rfcf235ef81c347fca4d05a53e2b6a63d"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_aeaec7d2d4fb14ad3beb0b97b2994d350"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_aeaec7d2d4fb14ad3beb0b97b2994d350"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_aeaec7d2d4fb14ad3beb0b97b2994d350"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a9fe8a7daf58040e1b4a34e14d63e2084"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a9fe8a7daf58040e1b4a34e14d63e2084"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a9fe8a7daf58040e1b4a34e14d63e2084"></a>Statement handle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_r94f62d27d6b6493e900251b0ca5c70af"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a1537f66b29c94c8184d35c8a8da00582"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a1537f66b29c94c8184d35c8a8da00582"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a1537f66b29c94c8184d35c8a8da00582"></a>ColumnNumber</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a453fd38908bd4b21a1cf92d97971d840"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a453fd38908bd4b21a1cf92d97971d840"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a453fd38908bd4b21a1cf92d97971d840"></a>Column number of the field to be queried, starting with 1 and increasing in ascending order.</p>
</td>
</tr>
<tr id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_r96436fd340df42b5a3c324c34463f430"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a546ac6b59b4d4f7c8a4de38d5179ae71"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a546ac6b59b4d4f7c8a4de38d5179ae71"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a546ac6b59b4d4f7c8a4de38d5179ae71"></a>FieldIdentifier</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a02c238292fcf454d93556259662d7b1f"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a02c238292fcf454d93556259662d7b1f"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a02c238292fcf454d93556259662d7b1f"></a>Field identifier of <strong id="b979762118420"><a name="b979762118420"></a><a name="b979762118420"></a>ColumnNumber</strong> in IRD.</p>
</td>
</tr>
<tr id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_r631934448c6a415589ebe69b810287e5"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a6ea86985897d4df2af06143be1318079"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a6ea86985897d4df2af06143be1318079"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a6ea86985897d4df2af06143be1318079"></a>CharacterAttributePtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a7b561db78ea74c9db5ddc6d91c781cf1"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a7b561db78ea74c9db5ddc6d91c781cf1"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a7b561db78ea74c9db5ddc6d91c781cf1"></a><strong id="b19922152316415"><a name="b19922152316415"></a><a name="b19922152316415"></a>Output parameter</strong>: pointer to the buffer that returns the <strong id="b992313232417"><a name="b992313232417"></a><a name="b992313232417"></a>FieldIdentifier</strong> value.</p>
</td>
</tr>
<tr id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_redd4bee4cdfe4661a6b1dec8129a9e5b"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a3e2f1e9decc24ebdb79e203ee2ce6718"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a3e2f1e9decc24ebdb79e203ee2ce6718"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a3e2f1e9decc24ebdb79e203ee2ce6718"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_u53a59b98639e49519b7afa77449302e4"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_u53a59b98639e49519b7afa77449302e4"></a><ul id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_u53a59b98639e49519b7afa77449302e4"><li><strong id="b159412256419"><a name="b159412256419"></a><a name="b159412256419"></a>BufferLength</strong> indicates the length of the buffer if <strong id="b14594172512412"><a name="b14594172512412"></a><a name="b14594172512412"></a>FieldIdentifier</strong> is an ODBC-defined field and <strong id="b175944251641"><a name="b175944251641"></a><a name="b175944251641"></a>CharacterAttributePtr</strong> points to a string or a binary buffer.</li><li>Ignore this parameter if <strong id="b18541102610414"><a name="b18541102610414"></a><a name="b18541102610414"></a>FieldIdentifier</strong> is an ODBC-defined field and <strong id="b175421926345"><a name="b175421926345"></a><a name="b175421926345"></a>CharacterAttributePtr</strong> points to an integer.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_r9bd9eebfe88544e59d20a828ac3d8ba0"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a41839fd6b6f5429a9b9aa9f04fc23db6"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a41839fd6b6f5429a9b9aa9f04fc23db6"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a41839fd6b6f5429a9b9aa9f04fc23db6"></a>StringLengthPtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a6c51d19400ec4e24b6c83737bfaebe6e"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a6c51d19400ec4e24b6c83737bfaebe6e"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_a6c51d19400ec4e24b6c83737bfaebe6e"></a><strong id="b643910278414"><a name="b643910278414"></a><a name="b643910278414"></a>Output parameter</strong>: pointer to a buffer in which the total number of valid bytes (for string data) is stored in <strong id="b243911277411"><a name="b243911277411"></a><a name="b243911277411"></a>*CharacterAttributePtr</strong>. Ignore the value of <strong id="b134398271644"><a name="b134398271644"></a><a name="b134398271644"></a>BufferLength</strong> if the data is not a string.</p>
</td>
</tr>
<tr id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_rc9cce4117dbe45acb4548b8c761b09ff"><td class="cellrowborder" valign="top" width="26.86%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_af41720c551e048378f2e339d4fd51bfb"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_af41720c551e048378f2e339d4fd51bfb"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_af41720c551e048378f2e339d4fd51bfb"></a>NumericAttributePtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.14%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_add7da64e8d99477194dd22925df2ed34"><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_add7da64e8d99477194dd22925df2ed34"></a><a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_add7da64e8d99477194dd22925df2ed34"></a><strong id="b1942028241"><a name="b1942028241"></a><a name="b1942028241"></a>Output parameter</strong>: pointer to an integer buffer in which the value of <strong id="b194313281414"><a name="b194313281414"></a><a name="b194313281414"></a>FieldIdentifier</strong> in the <strong id="b594312281941"><a name="b594312281941"></a><a name="b594312281941"></a>ColumnNumber</strong> row of the IRD is returned.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_s04cf966285614f118de0fabce2eaeb20"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_s06211cd9d00f43f098b0db65a182c4f4"></a>

If SQLColAttribute returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_STMT**  and  **StatementHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272888_en-us_topic_0237120418_en-us_topic_0059778558_sa0124e0144e742c989a8b2f0e52adfd6"></a>

See  [Examples](examples.md).

