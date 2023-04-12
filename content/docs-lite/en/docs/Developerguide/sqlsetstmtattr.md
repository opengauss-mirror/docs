# SQLSetStmtAttr<a name="EN-US_TOPIC_0242371457"></a>

## Function<a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_s289df741daf0491095bd3a6eeb7c3397"></a>

SQLSetStmtAttr is used to set attributes related to a statement.

## Prototype<a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_s64dcb5b7dc82403a86dfb0b07729723d"></a>

```
SQLRETURN SQLSetStmtAttr(SQLHSTMT      StatementHandle
                         SQLINTEGER    Attribute,    
                         SQLPOINTER    ValuePtr,     
                         SQLINTEGER    StringLength);
```

## Parameter<a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_s93d4d32e284e4e32930c5a9c033b6be3"></a>

**Table  1**  SQLSetStmtAttr parameters

<a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_tc7d6fc98e0094dfdb438ab59460d206d"></a>
<table><thead align="left"><tr id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_rb323017d53364460aff9e3ccc9832912"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_ab365a224aa1841d39743aef2954b4302"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_ab365a224aa1841d39743aef2954b4302"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_ab365a224aa1841d39743aef2954b4302"></a><strong id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a53341033a30144a38e6737be1d8cf505"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a53341033a30144a38e6737be1d8cf505"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a53341033a30144a38e6737be1d8cf505"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a2e4dd518264f4240a2ce290ed00efdf4"></a><strong id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_en-us_topic_0058965267_b552450314741"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_en-us_topic_0058965267_b552450314741"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_en-us_topic_0058965267_b552450314741"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_r13b05b59c65f4a8fb1f61880b8a41c0e"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_ac3f3037f05bb4b6a98ea3fe0a2291a46"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a6f3d479b15a64c6bbdf1fe3cc9c6a57c"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a6f3d479b15a64c6bbdf1fe3cc9c6a57c"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a6f3d479b15a64c6bbdf1fe3cc9c6a57c"></a>Statement handle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_r3191b8b205a145c9b4388d6bf3b1482e"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a7200a79355ae424c82fc839022a66d25"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a7200a79355ae424c82fc839022a66d25"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a7200a79355ae424c82fc839022a66d25"></a>Attribute</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a73f6bb39ae4140b4b1c3fe6f09a9d426"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a73f6bb39ae4140b4b1c3fe6f09a9d426"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a73f6bb39ae4140b4b1c3fe6f09a9d426"></a>Attribute to set.</p>
</td>
</tr>
<tr id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_r0c1b3c0fafbf4d7f8dcad213939dd18d"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a63582017c4844cdbb0164922a51fc64e"></a>ValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_aa0bbb1c4b3ce4d938964e62c473ab843"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_aa0bbb1c4b3ce4d938964e62c473ab843"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_aa0bbb1c4b3ce4d938964e62c473ab843"></a>Pointer to the <strong id="en-us_topic_0238272903_b926418405916"><a name="en-us_topic_0238272903_b926418405916"></a><a name="en-us_topic_0238272903_b926418405916"></a>Attribute</strong> value. <strong id="en-us_topic_0238272903_b8423527061611"><a name="en-us_topic_0238272903_b8423527061611"></a><a name="en-us_topic_0238272903_b8423527061611"></a>ValuePtr</strong> depends on the <strong id="en-us_topic_0238272903_b8975195019584"><a name="en-us_topic_0238272903_b8975195019584"></a><a name="en-us_topic_0238272903_b8975195019584"></a>Attribute</strong> value, and can be a 32-bit unsigned integer value or a pointer to a null-terminated string, a binary buffer, or a driver-specified value. If the <strong id="en-us_topic_0238272903_b716085815176"><a name="en-us_topic_0238272903_b716085815176"></a><a name="en-us_topic_0238272903_b716085815176"></a>ValuePtr</strong> parameter is a driver-specific value, it may be a signed integer.</p>
</td>
</tr>
<tr id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_rdc1f6c194f1d4e57bd88d21d62779354"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a0a98d98a9abb4a35970bd71fba0accec"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a0a98d98a9abb4a35970bd71fba0accec"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a0a98d98a9abb4a35970bd71fba0accec"></a>StringLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a10f4bbdff26b4974891e121722845a0b"><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a10f4bbdff26b4974891e121722845a0b"></a><a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_a10f4bbdff26b4974891e121722845a0b"></a>If <strong id="en-us_topic_0238272903_b84235270615534"><a name="en-us_topic_0238272903_b84235270615534"></a><a name="en-us_topic_0238272903_b84235270615534"></a>ValuePtr</strong> points to a string or a binary buffer, <strong id="en-us_topic_0238272903_b1767221619205"><a name="en-us_topic_0238272903_b1767221619205"></a><a name="en-us_topic_0238272903_b1767221619205"></a>StringLength</strong> is the length of <strong id="en-us_topic_0238272903_b84235270615538"><a name="en-us_topic_0238272903_b84235270615538"></a><a name="en-us_topic_0238272903_b84235270615538"></a>*ValuePtr</strong>. If <strong id="en-us_topic_0238272903_b842352706155312"><a name="en-us_topic_0238272903_b842352706155312"></a><a name="en-us_topic_0238272903_b842352706155312"></a>ValuePtr</strong> points to an integer, <strong id="en-us_topic_0238272903_b842352706155314"><a name="en-us_topic_0238272903_b842352706155314"></a><a name="en-us_topic_0238272903_b842352706155314"></a>StringLength</strong> is ignored.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_s25d37c96151c49ef8117dc53bda2bf2c"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

If SQLSetStmtAttr returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_STMT**  and  **StatementHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272903_en-us_topic_0237120433_en-us_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

See  [Examples](examples.md).

