# SQLGetData<a name="EN-US_TOPIC_0242371453"></a>

## Function<a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_s4c79ae112a6f415a9fed38561c46eebc"></a>

SQLGetData is used to retrieve data for a single column in the result set. It can be called for many times to retrieve data of variable lengths.

## Prototype<a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_s44941944b9a4473f82bcf2a103906e25"></a>

```
SQLRETURN SQLGetData(SQLHSTMT        StatementHandle,
                     SQLUSMALLINT    Col_or_Param_Num,
                     SQLSMALLINT     TargetType,
                     SQLPOINTER      TargetValuePtr,
                     SQLLEN          BufferLength,
                     SQLLEN          *StrLen_or_IndPtr);
```

## Parameter<a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_s6034c283c1954e118e141f899e1e1e3c"></a>

**Table  1**  SQLGetData parameters

<a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_t08910fa922fb482eb98845919c52785a"></a>
<table><thead align="left"><tr id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_r2508a683ee7f42e2bd834ea3257ac342"><th class="cellrowborder" valign="top" width="26.040000000000003%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a5a104b2657f046969ed5569992b0c911"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a5a104b2657f046969ed5569992b0c911"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a5a104b2657f046969ed5569992b0c911"></a><strong id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a3f9a72ce57fb40a6827c4ea699ae2ba8"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a3f9a72ce57fb40a6827c4ea699ae2ba8"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a3f9a72ce57fb40a6827c4ea699ae2ba8"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="73.96000000000001%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ae3c86bea30f44b6e9769831d56221748"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ae3c86bea30f44b6e9769831d56221748"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ae3c86bea30f44b6e9769831d56221748"></a><strong id="en-us_topic_0238272899_b8835182954710"><a name="en-us_topic_0238272899_b8835182954710"></a><a name="en-us_topic_0238272899_b8835182954710"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_r0d368665814c4b238ddb32a049d82a0d"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a880530243d4e498fb6b76bd77a3093ce"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a880530243d4e498fb6b76bd77a3093ce"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a880530243d4e498fb6b76bd77a3093ce"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a20e5de3767184b4c8f663421d6a024d0"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a20e5de3767184b4c8f663421d6a024d0"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a20e5de3767184b4c8f663421d6a024d0"></a>Statement handle, obtained from SQLAllocHandle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_rfe14a18985d9482b895a507a0f951600"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ab3db05e49dc94c47af5e94bc33d3687b"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ab3db05e49dc94c47af5e94bc33d3687b"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ab3db05e49dc94c47af5e94bc33d3687b"></a>Col_or_Param_Num</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_af40a50cb91c4404b854dccc0c604c9b3"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_af40a50cb91c4404b854dccc0c604c9b3"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_af40a50cb91c4404b854dccc0c604c9b3"></a>Column number for which the data retrieval is requested. The column number starts with 1 and increases in ascending order. The number of the bookmark column is 0.</p>
</td>
</tr>
<tr id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_r23c8324e42b340e8b37a24a27cca9c95"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a903c3136e8e9429d8e9539b4845b7213"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a903c3136e8e9429d8e9539b4845b7213"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a903c3136e8e9429d8e9539b4845b7213"></a>TargetType</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_adcda8574a802420ea929deafa9a6141c"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_adcda8574a802420ea929deafa9a6141c"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_adcda8574a802420ea929deafa9a6141c"></a>C data type in the TargetValuePtr buffer. If <strong id="en-us_topic_0238272899_b842352706151354"><a name="en-us_topic_0238272899_b842352706151354"></a><a name="en-us_topic_0238272899_b842352706151354"></a>TargetType</strong> is <strong id="en-us_topic_0238272899_b842352706151357"><a name="en-us_topic_0238272899_b842352706151357"></a><a name="en-us_topic_0238272899_b842352706151357"></a>SQL_ARD_TYPE</strong>, the driver uses the data type of the <strong id="en-us_topic_0238272899_b84235270615142"><a name="en-us_topic_0238272899_b84235270615142"></a><a name="en-us_topic_0238272899_b84235270615142"></a>SQL_DESC_CONCISE_TYPE</strong> field in ARD. If <strong id="en-us_topic_0238272899_b842352706151410"><a name="en-us_topic_0238272899_b842352706151410"></a><a name="en-us_topic_0238272899_b842352706151410"></a>TargetType</strong> is <strong id="en-us_topic_0238272899_b842352706151413"><a name="en-us_topic_0238272899_b842352706151413"></a><a name="en-us_topic_0238272899_b842352706151413"></a>SQL_C_DEFAULT</strong>, the driver selects a default data type according to the source SQL data type.</p>
</td>
</tr>
<tr id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_r372fa74235c64468a6983897427799dd"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ae4ae78a65c8141d1bfd385c483d28dc8"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ae4ae78a65c8141d1bfd385c483d28dc8"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ae4ae78a65c8141d1bfd385c483d28dc8"></a>TargetValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a833d8f5bcf634f64850d34eafe8a61ed"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a833d8f5bcf634f64850d34eafe8a61ed"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a833d8f5bcf634f64850d34eafe8a61ed"></a><strong id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a6d910f8795dd4db990901b288c0ab9e1"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a6d910f8795dd4db990901b288c0ab9e1"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a6d910f8795dd4db990901b288c0ab9e1"></a>Output parameter</strong>: pointer to the pointer that points to the buffer where the data is located.</p>
</td>
</tr>
<tr id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_r02cc41e13770477a8f264baa588d824d"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_aa2cdd32624f44a099427e2dc8ad515e7"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_aa2cdd32624f44a099427e2dc8ad515e7"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_aa2cdd32624f44a099427e2dc8ad515e7"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a6e075ecd6ab54022a4f257a7a417807a"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a6e075ecd6ab54022a4f257a7a417807a"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_a6e075ecd6ab54022a4f257a7a417807a"></a>Size of the buffer pointed to by <strong id="en-us_topic_0238272899_b842352706151459"><a name="en-us_topic_0238272899_b842352706151459"></a><a name="en-us_topic_0238272899_b842352706151459"></a>TargetValuePtr</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_r1d1639046e684c6bbccc0a5eda96aad6"><td class="cellrowborder" valign="top" width="26.040000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_af21961aaeecb4635b19a06814d1451b4"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_af21961aaeecb4635b19a06814d1451b4"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_af21961aaeecb4635b19a06814d1451b4"></a>StrLen_or_IndPtr</p>
</td>
<td class="cellrowborder" valign="top" width="73.96000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ab94e44beb6d448129a509b6cfc39fde1"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ab94e44beb6d448129a509b6cfc39fde1"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_ab94e44beb6d448129a509b6cfc39fde1"></a><strong id="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_afdac6251fcf84e25be35b5fffc947a8e"><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_afdac6251fcf84e25be35b5fffc947a8e"></a><a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_afdac6251fcf84e25be35b5fffc947a8e"></a>Output parameter</strong>: pointer to the buffer where the length or identifier value is returned.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_saaafb13e1b624682bc1d09efa9d415d4"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_NO\_DATA**  indicates that the SQL statement does not return a result set.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.
-   **SQL\_STILL\_EXECUTING**  indicates that the statement is being executed.

## Precautions<a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_s46dd381571fd497484a5e93a075e5643"></a>

If SQLGetData returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_STMT**  and  **StatementHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272899_en-us_topic_0237120429_en-us_topic_0059778461_s69654c27e011474aa33ede59ff0961b8"></a>

See  [Examples](examples.md).

